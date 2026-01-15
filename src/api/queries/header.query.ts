import { useQuery } from "@tanstack/react-query";
import { getHeaderMenu } from "@api/services/header.service";

export const useHeaderQuery = () => {
    return useQuery({
        queryKey: ["header-menu"],
        queryFn: async () => await getHeaderMenu(),
    });
}
