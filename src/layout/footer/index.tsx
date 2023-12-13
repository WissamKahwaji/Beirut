import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { ProductType } from "@/api/products/type";
import { NAV_LINKS } from "@/constants";
import { useGetContactUsInfo } from "@/api/constactUs/queries";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaSnapchatSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";
var myIcon = L.icon({
  iconUrl: "/logo.svg",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
const Footer = () => {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { data: contactUsInfo } = useGetContactUsInfo();
  const productTypes: ProductType[] | undefined = queryClient.getQueryData([
    "product-types",
  ]);

  return (
    <div className="flex flex-col justify-between gap-16 border-t  border-border px-12 py-16  shadow-negative  md:flex-row ">
      <Link to={"/"} className="">
        <div className="flex flex-row md:flex-col ">
          <Logo className=" h-24 w-24 " />

          <Name className=" h-24 w-24 " />
        </div>
      </Link>
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
        <div className="pb-4">
          <p className="mb-6 text-xl font-semibold capitalize text-gray-400">
            locations
          </p>
          <p className="font-semibold md:w-56 ">
            {contactUsInfo?.content.location}
          </p>
        </div>
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
              icon={myIcon}
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
    </div>
  );
};

export default Footer;
