import { Link } from "@tanstack/react-router";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import type { Section as SectionType } from "@interfaces/home";

export const Section = ({ section }: { section: SectionType }) => {
    const hasImages = section.images?.length > 0;
    const isHorizontal = section.imagesPosition === 'Left' || section.imagesPosition === 'Right';
    const isImageFirst = section.imagesPosition === 'Left' || section.imagesPosition === 'Up';
    const showHorizontalLayout = isHorizontal && hasImages;

    return (
        <div className={`py-12 ${showHorizontalLayout ? 'flex flex-col md:flex-row gap-8 items-center' : ''}`}>
            {isImageFirst && hasImages && (
                <div className={`${showHorizontalLayout ? 'md:w-1/2' : 'mb-8'} flex flex-wrap gap-4 justify-center`}>
                    {section.images.map((img) => (
                        <img 
                            key={img.id}
                            src={`${import.meta.env.VITE_API_URL}${img.url}`}
                            alt=""
                            className="max-w-sm rounded-lg border-2 border-fmgm-green"
                        />
                    ))}
                </div>
            )}
            <div className={showHorizontalLayout ? 'md:w-1/2' : 'w-full'}>
                <h2 className="text-3xl font-bold text-fmgm-blue mb-4 text-center md:text-left">{section.title}</h2>
                {section.text && (
                    <div className="prose prose-lg max-w-none">
                        <BlocksRenderer content={section.text as unknown as BlocksContent} />
                    </div>
                )}
                {section.links && (
                    <div className="mt-6 text-center md:text-left">
                        <Link
                            to={section.links.url}
                            className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
                                section.links.type === 'Button' 
                                    ? 'bg-fmgm-green text-fmgm-lime hover:bg-fmgm-blue' 
                                    : 'text-fmgm-green hover:text-fmgm-blue underline'
                            }`}
                        >
                            {section.links.text}
                        </Link>
                    </div>
                )}
            </div>
            {!isImageFirst && hasImages && (
                <div className={`${showHorizontalLayout ? 'md:w-1/2' : 'mt-8'} flex flex-wrap gap-4 justify-center`}>
                    {section.images.map((img) => (
                        <img 
                            key={img.id}
                            src={`${import.meta.env.VITE_API_URL}${img.url}`}
                            alt=""
                            className="max-w-sm rounded-lg border-2 border-fmgm-green"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
