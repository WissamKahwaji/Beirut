import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { ContactUsInfo } from "./type";

const getAboutUsInfo = async () => {
  const res = await publicInstance.get<ContactUsInfo>(API_ROUTES.ABOUT_US.GET);
  return res.data;
};
export { getAboutUsInfo };
