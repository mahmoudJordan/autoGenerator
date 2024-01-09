const { simpleFaker, fakerEN } = require("@faker-js/faker");
const parseCheckConstraint = require("../parsers/parseCheckConstraint");
const generateValueForCheckConstraint = require("../parsers/generateValueForCheckConstraint");
const faker = fakerEN;

module.exports = function generateRandomData(dataTypeInfo, column) {
  if (column.CHECK_CONSTRAINT && false) {
    generateValueForCheckConstraint(column.CHECK_CONSTRAINT)
    const parsed = parseCheckConstraint(column.COLUMN_NAME, column.CHECK_CONSTRAINT);
    console.log(parsed);
  }
  const MAX_LENGTH_Constraint = column.MAX_LENGTH_CONSTRAINT;
  const { type_name, max_length, precision, scale, is_user_defined, base_type_name } = dataTypeInfo;

  const _typeName = is_user_defined ? base_type_name : type_name;
  const _maxLength = MAX_LENGTH_Constraint ? MAX_LENGTH_Constraint / 2 : null;

  switch (_typeName) {
    case "int":
      return simpleFaker.number.int(2147483647);
    case "smallint":
      return simpleFaker.number.int(32767);
    case "tinyint":
      return simpleFaker.number.int(255);
    case "bigint":
      return simpleFaker.number.int(9223372036854775807);
    case "bit":
      return faker.datatype.boolean() ? 1 : 0;
    case "varchar":
    case "nvarchar":
    case "text":
    case "ntext":
      // Use max_length to limit the length of the generated string
      const stringMaxLength = _maxLength ?? 100;
      return faker.lorem.words().slice(0, stringMaxLength);
    case "char":
    case "nchar":
      // Use max_length for the character count
      const charMaxLength = _maxLength ?? 1;
      return faker.helpers.arrayElement(faker.lorem.words().split(" ")).charAt(0).repeat(charMaxLength);
    case "date":
      return faker.date.past().toISOString().split("T")[0];
    case "datetime":
    case "datetime2":
    case "datetimeoffset":
    case "smalldatetime":
      return faker.date.past().toISOString();
    case "time":
      return faker.date.past().toLocaleTimeString();
    case "float":
    case "real":
      return faker.datatype.float();
    case "decimal":
    case "money":
    case "smallmoney":
    case "numeric":
      return faker.finance.amount(0, 10000, scale); // Use scale for decimal places
    case "uniqueidentifier":
      return simpleFaker.datatype.uuid();
    case "binary":
    case "varbinary":
    case "image":
      const hexLength = !_maxLength ? 32 : _maxLength * 2;
      return faker.datatype.hexaDecimal(hexLength).substring(2);
    case "xml":
      return null;
      return `<root xmlns:h="http://www.w3.org/TR/html4/"><h:element> ${faker.lorem.words()} </h:element></root>`;
    case "json":
      return JSON.stringify({ key: faker.lorem.word() });
    default:
      return null;
  }
};
