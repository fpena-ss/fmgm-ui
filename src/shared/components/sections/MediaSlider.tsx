import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { MediaSlider as MediaSliderType } from "@interfaces/home";

export const MediaSlider = ({ media }: { media: MediaSliderType }) => (
    <div className="py-12 text-center">
        {media.media?.url && (
            <img 
                src={`${import.meta.env.VITE_API_URL}${media.media.url}`}
                alt={media.text}
                className="max-w-2xl mx-auto rounded-lg border-2 border-fmgm-green"
            />
        )}
        {media.text && (
            <p className="mt-4 text-fmgm-blue font-medium text-lg">{media.text}</p>
        )}
        {media.link && (
            <Link to={media.link} className="inline-flex items-center gap-1 mt-2 text-fmgm-green hover:text-fmgm-blue">
                <span>Ver más</span>
                <ArrowRightIcon className="w-4 h-4" />
            </Link>
        )}
    </div>
);
