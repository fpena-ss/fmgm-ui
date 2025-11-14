import { useQuery } from "@tanstack/react-query";
import { getContactUs } from "../services/conctact-us.service";

export const useContactUsQuery = () => {
    return useQuery({
        queryKey: ["contact-us"],
        queryFn: async () => await getContactUs(),
    });
}