import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/home.service";

export const useHomeQuery = () => {
    return useQuery({
        queryKey: ["home"],
        queryFn: async () => await getHome(),
    });
}