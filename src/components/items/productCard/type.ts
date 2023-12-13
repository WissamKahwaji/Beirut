import { DeepDetails, Product } from "@/api/products/type";
import { boolean } from "zod";

export type ProductCardProps = Product & { isCarouselItem: boolean };
