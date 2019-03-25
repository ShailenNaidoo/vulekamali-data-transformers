import faker from "faker"
import outputNational from "./functions/output-national";

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
}));

// @ts-ignore
function outputProvincial({ total, data }) {
  const root = ['Eastern Cape','Free State','Gauteng','Limpopo','Mpumalanga','Northern Cape','Western Cape','North West'].map((province) => {

    // @ts-ignore
    const children = data.filter(item => item.government === province).map(({ government, ...data }) => data);
    // @ts-ignore
    const amount = children.reduce((res,val) => val.amount + res,0);

    const percentage = (amount / total) * 100; 

    return {
      [province]: {
        name: province,
        amount,
        percentage,
        children
      }
    }
  });

  return {
    total,
    //@ts-ignore
    provinces: Object.assign(...root)
  }
}

const a = outputProvincial({ total: 10000000, data: provincialData });

console.log(JSON.stringify(a,null,2));