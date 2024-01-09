class Descriptor {
    constructor(db) {
        this.db = db;
    }

    async getTableSchema(table) {
        const query = `
        SELECT 
            c.NAME as COLUMN_NAME, 
            dt.NAME as DATA_TYPE,
            dt.schema_id,
            s.name as DATA_TYPE_SCHEMA,
            c.max_length as MAX_LENGTH_CONSTRAINT,
            c.is_identity as IS_IDENTITY,
            c.is_computed as IS_COMPUTED,
            fk.name as FK_NAME,
            ref_s.name as REFERENCED_SCHEMA_NAME,
            ref_t.name as REFERENCED_TABLE_NAME,
            ref_c.name as REFERENCED_COLUMN_NAME,
            CASE WHEN pk.column_id IS NOT NULL THEN 1 ELSE 0 END as IS_PRIMARY_KEY,
            chk.definition as CHECK_CONSTRAINT,
            def.definition as DEFAULT_CONSTRAINT,
            xsc.name as XML_SCHEMA_COLLECTION  -- Add this line to include XML Schema Collection
        FROM 
            sys.columns c
        INNER JOIN 
            sys.types dt ON c.user_type_id = dt.user_type_id
        LEFT JOIN 
            sys.schemas s ON dt.schema_id = s.schema_id
        LEFT JOIN 
            sys.foreign_key_columns as fkc ON fkc.parent_object_id = c.object_id AND fkc.parent_column_id = c.column_id
        LEFT JOIN 
            sys.foreign_keys as fk ON fkc.constraint_object_id = fk.object_id
        LEFT JOIN 
            sys.tables as ref_t ON fk.referenced_object_id = ref_t.object_id
        LEFT JOIN 
            sys.schemas ref_s ON ref_t.schema_id = ref_s.schema_id
        LEFT JOIN 
            sys.columns as ref_c ON fkc.referenced_column_id = ref_c.column_id AND fk.referenced_object_id = ref_c.object_id
        LEFT JOIN 
            (SELECT ic.object_id, ic.column_id FROM sys.index_columns ic
             INNER JOIN sys.indexes i ON ic.object_id = i.object_id AND ic.index_id = i.index_id
             WHERE i.is_primary_key = 1
            ) as pk ON c.object_id = pk.object_id AND c.column_id = pk.column_id
        LEFT JOIN 
            sys.check_constraints chk ON chk.parent_object_id = c.object_id AND chk.parent_column_id = c.column_id
        LEFT JOIN 
            sys.default_constraints def ON def.parent_object_id = c.object_id AND def.parent_column_id = c.column_id
        LEFT JOIN 
            sys.xml_schema_collections xsc ON c.xml_collection_id = xsc.xml_collection_id  -- Join to get XML Schema Collection
        WHERE 
            c.object_id = OBJECT_ID(N'${table}')
        `;

        const result = await this.db.query(query);
        return result.recordset;
    }




    async setCheckConstraintsForDatabase(enable) {
        const action = enable ? 'WITH CHECK CHECK' : 'NOCHECK';
        const query = `
            DECLARE @sql NVARCHAR(MAX) = '';
            SELECT @sql += 'ALTER TABLE [' + s.name + '].[' + t.name + '] ' + '${action}' + ' CONSTRAINT ALL; '
            FROM sys.tables t
            INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
            WHERE t.type = 'U';
            EXEC sp_executesql @sql;
        `;
        await this.db.query(query);
    }


    async setXmlColumnsNullable() {
        const getAffectedColumnsQuery = `
            SELECT 
                s.name AS schema_name, 
                t.name AS table_name, 
                c.name AS column_name,
                c.is_nullable
            FROM sys.columns c
            INNER JOIN sys.tables t ON c.object_id = t.object_id
            INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
            INNER JOIN sys.types tp ON c.user_type_id = tp.user_type_id
            WHERE tp.name = 'xml' AND c.xml_collection_id IS NOT NULL;
        `;

        const affectedColumns = await this.db.query(getAffectedColumnsQuery);
        if (affectedColumns.recordset.length > 0) {
            for (const col of affectedColumns.recordset) {
                if (col.is_nullable === 1) {
                    continue;  // Column is already nullable
                }

                console.warn(`Attempting to make XML column nullable: ${col.schema_name}.${col.table_name}.${col.column_name}`);

                // Make XML column nullable
                const makeNullableQuery = `
                    BEGIN TRY
                        ALTER TABLE [${col.schema_name}].[${col.table_name}] ALTER COLUMN [${col.column_name}] XML NULL;
                        PRINT 'Altered: ${col.schema_name}.${col.table_name}.${col.column_name}';
                    END TRY
                    BEGIN CATCH
                        PRINT 'Failed to alter: ${col.schema_name}.${col.table_name}.${col.column_name} due to dependencies or other issues';
                    END CATCH
                `;
                await this.db.query(makeNullableQuery);
            }
        } else {
            console.warn('No non-nullable XML columns with validation found to be altered.');
        }
    }

}



module.exports = Descriptor;