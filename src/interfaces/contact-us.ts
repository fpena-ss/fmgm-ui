import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { Logo } from "./shared";

export interface ContactInfo {
    id: string;
    email: string;
    phone: string;
    image: Logo | null;
}

export interface ContactUs {
    data: {
        id: string;
        title: string;
        image: Logo | null;
        body: BlocksContent;
        contactInfo: ContactInfo;
    }
}