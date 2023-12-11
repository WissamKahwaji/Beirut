import * as z from "zod";
const contactUsValidationSchema = z.object({
  name: z.string().min(4, "name should be more than four characters"),
  email: z.string().email("this field should be valid email"),
  subject: z.string({ required_error: "this field is required" }),
  message: z
    .string()
    .min(10, "message should be more then 10 characters")
    .max(500, "message should be less than 500 characters"),
});
export default contactUsValidationSchema;
export type ContactUsValues = z.infer<typeof contactUsValidationSchema>;
