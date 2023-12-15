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
import { useQueryClient } from "@tanstack/react-query";
import { ContactUsInfo } from "@/api/constactUs/type";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaSnapchatSquare,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const queryClient = useQueryClient();
  const contactUsInfo: ContactUsInfo | undefined = queryClient.getQueryData([
    "contact-us-info",
  ]);
  const form = useForm<ContactUsValues>({
    resolver: zodResolver(contactUsValidationSchema),
  });
  const onSubmit = (values: ContactUsValues) => {};
  return (
    <div className="">
      <div className=" p-6 px-4">
        <h2 className="sm:2xl scroll-m-20 pb-2 text-center  text-xl font-semibold uppercase tracking-tight first:mt-0 md:text-3xl">
          {"contact us"}
        </h2>
      </div>
      <div className="mx-2 mb-12 flex flex-col justify-center gap-16 md:flex-row  ">
        <div className="flex flex-col gap-8 bg-gray-background p-8 md:gap-16">
          <div>
            <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
              locations
            </p>
            <p className="font-semibold  ">{contactUsInfo?.content.location}</p>
          </div>
          <div>
            <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
              contact info
            </p>
            <ul className="flex flex-col justify-center gap-4">
              <li>
                <p className="flex items-center gap-2  font-semibold">
                  <MdEmail />
                  <span>{contactUsInfo?.content.email}</span>
                </p>
              </li>

              <li>
                <p className=" flex items-center gap-2 font-semibold">
                  <FaPhone />
                  <span>{contactUsInfo?.content.mobileOne}</span>
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 font-semibold">
                  <FaPhone />
                  <span>{contactUsInfo?.content.phoneNumber}</span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
              social media
            </p>
            <ul className="mb-2 flex gap-2">
              <li>
                {/* <Link
                  to={contactUsInfo?.content.faceBook ?? ""}
                  target="_blank"
                > */}
                <FaFacebookSquare className="h-8 w-8 transition-transform hover:scale-105 md:h-12 md:w-12" />
                {/* </Link> */}
              </li>
              <li>
                <Link
                  to={contactUsInfo?.content.instagram ?? ""}
                  target="_blank"
                >
                  <FaInstagramSquare className="h-8 w-8 transition-transform hover:scale-105 md:h-12 md:w-12" />
                </Link>
              </li>

              <li>
                <Link to={contactUsInfo?.content.threads ?? ""} target="_blank">
                  <FaSquareThreads className="h-8 w-8 transition-transform hover:scale-105 md:h-12 md:w-12" />
                </Link>
              </li>
              <li>
                <Link
                  to={contactUsInfo?.content.snapChat ?? ""}
                  target="_blank"
                >
                  <FaSnapchatSquare className="h-8 w-8 transition-transform hover:scale-105 md:h-12 md:w-12" />
                </Link>
              </li>
            </ul>
            <ul className="flex gap-2"></ul>
          </div>
        </div>
        <div className="md:w-96">
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
    </div>
  );
};

export default ContactUs;
