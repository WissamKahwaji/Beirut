import { useQuery } from "@tanstack/react-query";
import { getHomeData } from ".";

const useGetHomeData = () =>
  useQuery({ queryKey: ["home-data"], queryFn: () => getHomeData() });
export { useGetHomeData };
