import * as z from "zod";
const addToCartValidationSchema = z.object({
  count: z
    .number()
    .min(1, "Please enter product count equal to or grater than 1."),
  selectedWeightAndPrice: z.object({
    price: z.string(),
    weight: z.string(),
    unit: z.string(),
  }),
});
export default addToCartValidationSchema;
export type AddToCartValues = z.infer<typeof addToCartValidationSchema>;
