import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { useAboutUsQuery } from "@api/queries/about-us.query";
import type { AboutUs as AboutUsType } from "@interfaces/about-us";

export const AboutUs = () => {
    const { data, isLoading, error } = useAboutUsQuery();
    const aboutUs: AboutUsType['data'] = data?.data;

    if (isLoading) {
        return (
            <div className="w-full min-h-[50vh] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-fmgm-green border-t-fmgm-lime rounded-full animate-spin" />
                    <p className="text-fmgm-green font-medium">Cargando...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-[50vh] flex items-center justify-center">
                <div className="text-center p-8 border-2 border-fmgm-blue/20 rounded-lg">
                    <p className="text-fmgm-blue font-semibold">Error: {error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-fmgm-blue mb-8">
                    {aboutUs?.title}
                </h1>
                {aboutUs?.images && aboutUs.images.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {aboutUs.images.map((image, index) => (
                            <img 
                                key={index}
                                src={`${import.meta.env.VITE_API_URL}${image.url}`} 
                                alt={image.alt ?? ''} 
                                className="max-w-sm rounded-lg border-4 border-fmgm-green"
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="prose prose-lg max-w-none">
                    <BlocksRenderer content={aboutUs?.body as unknown as BlocksContent} />
                </div>
            </div>
        </section>
    );
}
