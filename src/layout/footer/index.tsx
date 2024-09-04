import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { ProductType } from "@/api/products/type";
import { MAP_INDICATOR_ICON, NAV_LINKS } from "@/constants";
import { useGetContactUsInfo } from "@/api/constactUs/queries";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";

const Footer = () => {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { data: contactUsInfo } = useGetContactUsInfo();
  const productTypes: ProductType[] | undefined = queryClient.getQueryData([
    "product-types",
  ]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col justify-between gap-8 border-t border-border  px-6 py-8 shadow-negative md:flex-row md:gap-10  md:px-4  md:py-6 ">
        <div className="fixed bottom-20 right-10 z-[1001] h-12 w-12 rounded-md bg-background shadow-md transition-transform hover:scale-110 md:bottom-10 md:h-16 md:w-16">
          <Link
            to={`https://wa.me/${contactUsInfo?.content.whatsApp}`}
            target="_blank"
          >
            <FaWhatsappSquare className="h-full w-full" />
          </Link>
        </div>

        <div>
          <Link to={"/"} className="">
            <div className="flex flex-row  ">
              <Logo className=" h-24 w-24 " />

              <Name className=" h-24 w-24 " />
            </div>
          </Link>
          <div className="mt-5 flex-col md:mt-8 md:flex md:flex-row md:gap-16">
            <div className=" mb-7 flex gap-12 md:mb-0">
              <div className="md:w-[80px]">
                <p className="mb-3 text-xl font-semibold capitalize text-gray-400">
                  brand
                </p>
                <ul className="flex flex-col justify-center gap-2 text-sm">
                  <li>
                    <Link to={"/"}>
                      <p className=" font-semibold capitalize">home</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about-us"}>
                      <p className=" font-semibold capitalize">about us</p>
                    </Link>
                  </li>
                  {/* {NAV_LINKS.map((navLink) => (
              <li key={navLink.label}>
                <Link to={navLink.href}>
                  <p className=" font-semibold capitalize">{navLink.label}</p>
                </Link>
              </li>
            ))} */}
                </ul>
              </div>
              <div className="md:w-[80px]">
                <p className="mb-3 text-xl font-semibold capitalize text-gray-400">
                  shop
                </p>
                <ul className="flex flex-col justify-center gap-2 text-sm">
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
            <div className="flex-col gap-10 md:flex md:w-full md:flex-row">
              <div className="mb-5 md:mb-0">
                <p className="mb-1 text-xl font-semibold capitalize text-gray-400 md:mb-3">
                  customer service
                </p>
                <Link to={`/shipping-policy`}>
                  <p className="text-sm font-semibold capitalize">
                    Shipping Pollicy
                  </p>
                </Link>
              </div>
              <div>
                <p className="mb-3 text-xl font-semibold capitalize text-gray-400">
                  Get In Touch
                </p>
                <p className="font-semibold capitalize text-gray-400">
                  contact us
                </p>
                <ul className="flex flex-col justify-center gap-2 text-sm">
                  <li>
                    <p className="font-semibold">
                      {contactUsInfo?.content.email}
                    </p>
                  </li>

                  <li>
                    <p className="font-semibold">
                      {contactUsInfo?.content.mobileOne} -{" "}
                      <span className="font-serif text-sm font-normal text-gray-400">
                        Management
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      {contactUsInfo?.content.phoneNumber} -{" "}
                      <span className="font-serif text-sm font-normal text-gray-400">
                        Retail Store
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      {contactUsInfo?.content.mobileTwo} -{" "}
                      <span className="font-serif text-sm font-normal text-gray-400">
                        Retail Store
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-5 md:mb-0 md:mt-0">
                <p className=" mb-3 text-xl font-semibold capitalize text-gray-400">
                  Discover our journey !
                </p>
                <ul className="mb-2 flex gap-2">
                  <li>
                    {/* <Link to={contactUsInfo?.content.faceBook ?? ""} target="_blank"> */}
                    <FaFacebookSquare className="h-8 w-8" />
                    {/* </Link> */}
                  </li>
                  <li>
                    <Link
                      to={contactUsInfo?.content.instagram ?? ""}
                      target="_blank"
                    >
                      <FaInstagramSquare className="h-8 w-8" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={contactUsInfo?.content.threads ?? ""}
                      target="_blank"
                    >
                      <FaSquareThreads className="h-8 w-8" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={contactUsInfo?.content.snapChat ?? ""}
                      target="_blank"
                    >
                      <FaSnapchatSquare className="h-8 w-8" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  flex-col  md:w-1/3">
          {contactUsInfo && (
            <div className=" w-full">
              <MapContainer
                key={pathname}
                className="aspect-video h-full w-full"
                center={[
                  Number(contactUsInfo?.content.longitude),
                  Number(contactUsInfo?.content.latitude),
                ]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  icon={MAP_INDICATOR_ICON}
                  position={[
                    Number(contactUsInfo?.content.longitude),
                    Number(contactUsInfo?.content.latitude),
                  ]}
                >
                  <Popup>{""}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
          <div className="pt-4">
            <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
              locations
            </p>
            <p className="font-semibold  ">{contactUsInfo?.content.location}</p>
          </div>
        </div>
      </div>
      <div className=" my-2 text-center text-sm md:text-base">
        <div>
          Copyright{" "}
          <strong>
            <span>Beirut</span>
          </strong>{" "}
          Roaster. All Rights Reserved
        </div>
        <div className=" text-sm">
          Powered By
          <a href="/" className=" ml-1">
            Sii Media
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
