import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import contactUsValidationSchema, {
  ContactUsValues,
} from "@/utils/validation/contactUs";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textArea";
const ContactUs = () => {
  const form = useForm<ContactUsValues>({
    resolver: zodResolver(contactUsValidationSchema),
  });
  const onSubmit = (values: ContactUsValues) => {};
  return (
    <div className="">
      <div className=" h-96 ">
        <img
          src={
            "https://i.shgcdn.com/a90493a9-2ee1-481a-843c-9cbbcd3fc122/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/"
          }
          className="aspect-square h-full w-full object-cover"
          alt={""}
        />
      </div>
      <div className=" px-4 pt-6">
        <h2 className="sm:2xl scroll-m-20 pb-2 text-center  text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          {"contact us"}
        </h2>
      </div>
      <div className="mx-3 pb-12 sm:m-auto sm:w-2/3 md:w-1/2 lg:w-1/3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 lg:space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>subject</FormLabel>
                  <FormControl>
                    <Input placeholder="enter  subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>message</FormLabel>
                  <FormControl>
                    <TextArea placeholder="enter  message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
