const { simpleFaker, fakerEN } = require("@faker-js/faker");
const faker = fakerEN;

module.exports = function generateRandomData(dataType) {
  switch (dataType) {
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
      return faker.lorem.words();
    case "char":
    case "nchar":
      return faker.helpers
        .arrayElement(faker.lorem.words().split(" "))
        .charAt(0);
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
      return faker.finance.amount();
    case "uniqueidentifier":
      return simpleFaker.datatype.uuid();
    case "binary":
    case "varbinary":
    case "image":
      // Return a random byte array (in hex format for simplicity)
      return faker.datatype.hexaDecimal(16).substring(2);
    case "xml":
      // Simple XML example
      return "<root><element>" + faker.lorem.words() + "</element></root>";
    case "json":
      // Simple JSON object
      return JSON.stringify({ key: faker.lorem.word() });
    // Add more cases for other data types as needed
    default:
      return null;
  }
};
