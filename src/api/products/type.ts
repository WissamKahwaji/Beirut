export type ProductType = {
  _id: string;
  name: string;
  img: string;
  __v: number;
};
export type Product = {
  imgs: Imgs;
  deepDetails: DeepDetails;
  _id: string;
  img: string;
  title: string;
  desc: string;
  type: ProductType;
  __v?: number;
};

export type DeepDetails = {
  price: string;
  weight: string;
};

export type Imgs = {
  first: string;
  second: null;
  third: null;
};
