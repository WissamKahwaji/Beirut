import * as z from "zod";
const addToCardValidationSchema = z.object({
  count: z
    .number()
    .min(1, "Please enter product count equal to or grater than 1."),
});
export default addToCardValidationSchema;
export type AddToCardValues = z.infer<typeof addToCardValidationSchema>;
