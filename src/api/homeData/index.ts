import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { Home } from "./type";

const getHomeData = async () => {
  const res = await publicInstance.get<Home>(API_ROUTES.HOME_DATA.GET);
  return res.data;
};
export { getHomeData };
