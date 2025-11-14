import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { Logo } from "./shared";

export interface Home {
    data: {
        id: string;
        title: string;
        logo: Logo;
        body: BlocksContent;
    }
}