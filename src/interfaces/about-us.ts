import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { Logo } from "./shared";

export interface AboutUs {
    data: {
        id: string;
        title: string;
        images: Logo[] | null;
        body: BlocksContent;
    }
}