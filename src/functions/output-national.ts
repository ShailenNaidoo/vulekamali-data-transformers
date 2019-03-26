type Tid = string;
type Tname = string;
type Tamount = number;
type Turl = string;
type Tpercentage = number;

type TnationalInput = {
  slug: Tid,
  amount: Tamount,
  detail: Turl,
  name: Tname,
  percentage_of_total: Tpercentage,
}

type inputNational = TnationalInput[]; // province will always be `null` here

type TnationalItem = {
  id: Tid,
  name: Tname,
  amount: Tamount,
  url: Turl,
  percentage: Tpercentage,
}

type outputNational = TnationalItem[];

export default (items : inputNational) : outputNational => items.map(({ slug, amount, detail, name, percentage_of_total }) => ({
  id: slug,
  name,
  amount,
  url: detail,
  percentage: percentage_of_total,
}));