var faker = require('faker');

var database = { address: [] };

for (var i=1; i<9; i++)
{
  database.address.push({
    name: faker.address.name(),
    number: faker.address.number()
  });
}

console .log(JSON.stringify(database));
