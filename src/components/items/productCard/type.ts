import { DeepDetails } from "@/api/products/type";

export type ProductCardProps = {
  id: string;
  img: string;
  title: string;
  desc: string;
  deepDetails: DeepDetails;
};
