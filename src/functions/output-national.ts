type id = string;
type name = string;
type amount = number;
type url = string;
type percentage = number;

type TnationalInput = {
  slug: id,
  amount: amount,
  detail: url,
  name: name,
  percentage_of_total: percentage,
}

type inputNational = TnationalInput[]; // province will always be `null` here

type TnationalItem = {
  id: id,
  name: name,
  amount: amount,
  url: url,
  percentage: percentage,
}

type outputNational = TnationalItem[];

export default (data : inputNational) : outputNational => data.map(({ slug, amount, detail, name, percentage_of_total }) => ({
  id: slug,
  name,
  amount,
  url: detail,
  percentage: percentage_of_total,
}));