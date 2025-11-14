import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { useAboutUsQuery } from "../../../api/queries/about-us.query";
import type { AboutUs as AboutUsType } from "../../../interfaces/about-us";

export const AboutUs = () => {
    const { data, isLoading, error } = useAboutUsQuery();
    const aboutUs: AboutUsType['data'] = data?.data;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{aboutUs?.title}</h1>
                {aboutUs?.images?.map((image) => (
                    <img src={`${import.meta.env.VITE_API_URL}${image.url}`} alt={image.alt ?? ''} />
                ))}
            </div>
            <div className="prose prose-lg mt-10">
                <BlocksRenderer content={aboutUs?.body as unknown as BlocksContent} />
            </div>
        </div>
    )
}