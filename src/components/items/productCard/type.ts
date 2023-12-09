import { DeepDetails } from "@/api/products/type";

export type ProductCardProps = {
  img: string;
  title: string;
  desc: string;
  deepDetails: DeepDetails;
};
