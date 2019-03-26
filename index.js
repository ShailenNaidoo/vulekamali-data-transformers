const faker = require("faker");
const transformers = require("./lib").default

const nationalData = new Array(...[1,2,3,4,5,6,7,8,9,10]).map(item => ({ 
  slug: faker.lorem.slug(),
  amount: faker.random.number(),
  detail: faker.internet.url(),
  name: faker.name.firstName(),
  percentage_of_total: faker.random.number(),
}));

const provincialData = ['Eastern Cape','Free State','Gauteng','Limpopo','Mpumalanga','Northern Cape','Western Cape','North West','South Africa'].map((province,index) => ({
  ...nationalData[index],
  government: province,
  // children: {
  //   national: faker.random.number(),
  //   provincial: faker.random.number()
  // }
}));

console.log(JSON.stringify(transformers.outputProvincial({ total: 100000, items: provincialData }),null,2));

// console.log(JSON.stringify(provincialData,null,2));