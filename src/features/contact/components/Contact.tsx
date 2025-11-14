import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { useContactUsQuery } from "../../../api/queries/contact-us.query";
import type { ContactUs as ContactUsType } from "../../../interfaces/contact-us";

export const Contact = () => {
    const { data, isLoading, error } = useContactUsQuery();
    const contactUs: ContactUsType['data'] = data?.data;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(contactUs); 
    return (
        <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{contactUs?.title}</h1>
                <img src={`${import.meta.env.VITE_API_URL}${contactUs?.image?.url}`} alt={contactUs?.image?.alt ?? ''} />
            </div>
            <div className="prose prose-lg mt-10">
                <BlocksRenderer content={contactUs?.body as unknown as BlocksContent} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-lg font-bold">{contactUs?.contactInfo?.email}</p>
                <p className="text-lg font-bold">{contactUs?.contactInfo?.phone}</p>
                <img src={`${import.meta.env.VITE_API_URL}${contactUs?.contactInfo?.image?.url}`} alt={contactUs?.contactInfo?.image?.alt ?? ''} />
            </div>
        </div>
    )
}
