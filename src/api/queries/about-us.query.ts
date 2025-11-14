import { useQuery } from "@tanstack/react-query";
import { getAboutUs } from "../services/about-us.service";

export const useAboutUsQuery = () => {
    return useQuery({
        queryKey: ["about-us"],
        queryFn: async () => await getAboutUs(),
    });
}