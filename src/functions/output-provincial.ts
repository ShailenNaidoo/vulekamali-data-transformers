type id = string;
type name = string;
type amount = number;
type total = number;
type url = string;
type percentage = number;

type Tgovernment = 'Eastern Cape' | 'Free State' | 'Gauteng' | 'Limpopo' | 'Mpumalanga' | 'KwaZulu-Natal' | 'Northern Cape' | 'Western Cape' | 'North West' | 'South Africa';

type TprovincialInput = {
  slug: id,
  amount: amount,
  detail: url,
  name: name,
  percentage_of_total: percentage,
  government: Tgovernment,
}

type inputProvincial = TprovincialInput[]; // province will always have a value here

type TnationalItem = {
  id: id,
  name: name,
  amount: amount,
  url: url,
  percentage: percentage,
}

type TprovincialItem = {
  id: id,
  name: name,
  amount: amount,
  percentage: percentage,
  children: TnationalItem[],
}

type outputProvincial = {
  'Eastern Cape': TprovincialItem,
  'Free State': TprovincialItem,
  'Gauteng': TprovincialItem,
  'Limpopo': TprovincialItem,
  'Mpumalanga': TprovincialItem,
  'KwaZulu-Natal': TprovincialItem,
  'Northern Cape': TprovincialItem,
  'Western Cape': TprovincialItem,
  'North West': TprovincialItem,
}

// @ts-ignore
export default ({ total, data }) => {
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