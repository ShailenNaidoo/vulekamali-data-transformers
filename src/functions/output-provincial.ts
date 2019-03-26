type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

type Tgovernment = 'Eastern Cape' | 'Free State' | 'Gauteng' | 'Limpopo' | 'Mpumalanga' | 'KwaZulu-Natal' | 'Northern Cape' | 'Western Cape' | 'North West' | 'South Africa';

type TprovincialInput = {
  slug: Tid,
  amount: Tamount,
  detail: Turl,
  name: Tname,
  percentage_of_total: Tpercentage,
  government: Tgovernment,
}

type inputProvincial = {
  total: Ttotal,
  items: TprovincialInput[]
}

type TnationalItem = {
  id: Tid,
  name: Tname,
  amount: Tamount,
  url: Turl,
  percentage: Tpercentage,
}

type TprovincialItem = {
  id: Tid,
  name: Tname,
  amount: Tamount,
  percentage: Tpercentage,
  children: TnationalItem[],
}

type outputProvincial = {
  total: Ttotal,
  provinces: {
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
}

export default ({ total, items } : inputProvincial) : outputProvincial => {
  const root = ['Eastern Cape','Free State','Gauteng','Limpopo','Mpumalanga','Northern Cape','Western Cape','North West'].map((province) => {

    const children = items.filter(item => item.government === province).map(({ government, ...data }) => data);

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
    // @ts-ignore
    provinces: Object.assign(...root)
  }
}