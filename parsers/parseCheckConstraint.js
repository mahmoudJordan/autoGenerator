function parseCheckConstraint(columnName, checkClause) {
    const constraints = {};

    // Removing the brackets from the checkClause
    const formattedCheckClause = checkClause.replace(/\[|\]/g, '');

    // Splitting the clause based on the column name
    const parts = formattedCheckClause.split(columnName);

    if (parts.length > 1) {
        // Extracting the operator and value
        const match = parts[1].trim().match(/(>=|<=|>|<)\s*([0-9.]+)/);

        if (match) {
            const [ , operator, value ] = match;
            switch (operator) {
                case '>=': constraints.min = parseFloat(value); break;
                case '<=': constraints.max = parseFloat(value); break;
                case '>': constraints.minExclusive = parseFloat(value); break;
                case '<': constraints.maxExclusive = parseFloat(value); break;
            }
        }
    }

    return constraints;
}




module.exports = parseCheckConstraint;