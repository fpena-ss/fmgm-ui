import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useContactUsQuery } from "@api/queries/contact-us.query";
import type { ContactUs as ContactUsType } from "@interfaces/contact-us";
import { Loading } from "@shared/components/Loading";
import { ErrorMessage } from "@shared/components/ErrorMessage";

export const Contact = () => {
    const { data, isLoading, error } = useContactUsQuery();
    const contactUs: ContactUsType['data'] = data?.data;

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;

    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-fmgm-blue mb-8">
                    {contactUs?.title}
                </h1>
                {contactUs?.image?.url && (
                    <img 
                        src={`${import.meta.env.VITE_API_URL}${contactUs.image.url}`} 
                        alt={contactUs?.image?.alt ?? ''} 
                        className="max-w-md mx-auto rounded-lg border-4 border-fmgm-green mb-12"
                    />
                )}
            </div>
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <div className="prose prose-lg max-w-none">
                    <BlocksRenderer content={contactUs?.body as unknown as BlocksContent} />
                </div>
            </div>
            {contactUs?.contactInfo && (
                <div className="max-w-2xl mx-auto px-6">
                    <div className="border-2 border-fmgm-green rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-fmgm-blue mb-6">
                            Información de Contacto
                        </h2>
                        <div className="space-y-4">
                            {contactUs.contactInfo.email && (
                                <a 
                                    href={`mailto:${contactUs.contactInfo.email}`}
                                    className="flex items-center justify-center gap-3 text-fmgm-blue hover:text-fmgm-green transition-colors"
                                >
                                    <EnvelopeIcon className="w-8 h-8 text-fmgm-green" />
                                    <span className="text-lg font-medium">{contactUs.contactInfo.email}</span>
                                </a>
                            )}
                            {contactUs.contactInfo.phone && (
                                <a 
                                    href={`tel:${contactUs.contactInfo.phone}`}
                                    className="flex items-center justify-center gap-3 text-fmgm-blue hover:text-fmgm-green transition-colors"
                                >
                                    <PhoneIcon className="w-8 h-8 text-fmgm-green" />
                                    <span className="text-lg font-medium">{contactUs.contactInfo.phone}</span>
                                </a>
                            )}
                        </div>
                        {contactUs.contactInfo.image?.url && (
                            <img 
                                src={`${import.meta.env.VITE_API_URL}${contactUs.contactInfo.image.url}`} 
                                alt={contactUs.contactInfo.image.alt ?? ''} 
                                className="mt-6 max-w-[200px] mx-auto rounded-lg border-4 border-fmgm-green"
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
