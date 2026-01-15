import { useQuery } from "@tanstack/react-query";
import { getFooter } from "@api/services/footer.service";

export const useFooterQuery = () => {
    return useQuery({
        queryKey: ["footer"],
        queryFn: async () => await getFooter(),
    });
}
