type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

type Tgovernment = 'Eastern Cape' | 'Free State' | 'Gauteng' | 'Limpopo' | 'Mpumalanga' | 'KwaZulu-Natal' | 'Northern Cape' | 'Western Cape' | 'North West' | 'South Africa';

type TconsolidatedChildren = {
  national: number,
  provincial: number,
}

type TconsolidatedInput = {
  slug: Tid,
  name: Tname,
  detail: Turl,
  amount: Tamount,
  percentage_of_total: Tpercentage,
  government: Tgovernment,
  children: TconsolidatedChildren,
}

type inputConsolidated = {
  total: Ttotal,
  items: TconsolidatedInput[], // province will always be `null` here
}

type TconsolidatedItem = {
  id: Tid,
  name: Tname,
  url: Turl,
  percentage: Tpercentage,
  amount: Tamount,
  children: TconsolidatedChildren,
}

type outputConsolidated = {
  total: Ttotal,
  focusAreas: TconsolidatedItem[],
}

export default ({ total, items } : inputConsolidated) : outputConsolidated => ({
  total,
  focusAreas: items.map(({ slug, name, detail, amount, percentage_of_total, children }) => ({
    id: slug,
    name,
    url: detail,
    amount,
    percentage: percentage_of_total,
    children,
  }))
});