import { useQuery } from "@tanstack/react-query";
import { getHome } from "@api/services/home.service";

export const useHomeQuery = () => {
    return useQuery({
        queryKey: ["home"],
        queryFn: async () => await getHome(),
    });
}
