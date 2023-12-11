import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ProductType } from "@/api/products/type";
import { NAV_LINKS } from "@/constants";
import { Logo } from "@/api/common/type";
import { useGetContactUsInfo } from "@/api/constactUs/queries";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaSnapchatSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  const queryClient = useQueryClient();
  const { data: contactUsInfo } = useGetContactUsInfo();
  const productTypes: ProductType[] | undefined = queryClient.getQueryData([
    "product-types",
  ]);
  const logo: Logo | undefined = queryClient.getQueryData(["get-logo"]);
  return (
    <div className="flex flex-col justify-center gap-16 border-t  border-border px-12 py-16  shadow-negative  md:flex-row ">
      <div className=" flex gap-16">
        <div>
          <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
            taps
          </p>
          <ul className="flex flex-col justify-center gap-2">
            <li>
              <Link to={"/"}>
                <p className=" font-semibold capitalize">home</p>
              </Link>
            </li>
            {NAV_LINKS.map((navLink) => (
              <li key={navLink.label}>
                <Link to={navLink.href}>
                  <p className=" font-semibold capitalize">{navLink.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
            product types
          </p>
          <ul className="flex flex-col justify-center gap-2">
            {productTypes?.slice(0, 4).map((productType) => (
              <li key={productType._id}>
                <Link to={`/products/${productType._id}`}>
                  <p className=" font-semibold capitalize">
                    {productType.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
          locations
        </p>
        <p className="font-semibold md:w-56 ">
          {contactUsInfo?.content.location}
        </p>
      </div>
      <div>
        <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
          contact us
        </p>
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <p className="font-semibold">{contactUsInfo?.content.email}</p>
          </li>
          <li>
            <p className="font-semibold">{contactUsInfo?.content.emailOne}</p>
          </li>
          <li>
            <p className="font-semibold">{contactUsInfo?.content.mobileOne}</p>
          </li>
          <li>
            <p className="font-semibold">{contactUsInfo?.content.mobileTwo}</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
          social media
        </p>
        <ul className="mb-2 flex gap-2">
          <li>
            <Link to={contactUsInfo?.content.faceBook ?? ""} target="_blank">
              <FaFacebookSquare className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link to={contactUsInfo?.content.instagram ?? ""} target="_blank">
              <FaInstagramSquare className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link to={contactUsInfo?.content.whatsApp ?? ""} target="_blank">
              <FaWhatsappSquare className="h-8 w-8" />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li>
            <Link to={contactUsInfo?.content.linkedIn ?? ""} target="_blank">
              <FaLinkedin className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link to={contactUsInfo?.content.threads ?? ""} target="_blank">
              <FaSquareThreads className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link to={contactUsInfo?.content.snapChat ?? ""} target="_blank">
              <FaSnapchatSquare className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
