import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { SliderSection as SliderSectionType } from "@interfaces/home";
import { useSlider } from "@shared/hooks/useSlider";
import { SliderControls } from "@shared/components/SliderControls";

export const SliderSection = ({ slider }: { slider: SliderSectionType }) => {
    const itemCount = slider.items?.length ?? 0;
    const {
        containerRef,
        currentIndex,
        canScrollLeft,
        canScrollRight,
        scrollTo,
        scrollPrev,
        scrollNext,
    } = useSlider(itemCount);

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-fmgm-blue mb-8 text-center">{slider.title}</h2>
            <div 
                ref={containerRef}
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {slider.items?.map((item) => (
                    <div key={item.id} className="shrink-0 w-72">
                        {item.media?.url && (
                            <img 
                                src={`${import.meta.env.VITE_API_URL}${item.media.url}`}
                                alt={item.text}
                                className="w-full h-48 object-cover rounded-lg border-2 border-fmgm-green"
                            />
                        )}
                        {item.text && (
                            <p className="mt-3 text-fmgm-blue font-medium">{item.text}</p>
                        )}
                        {item.link && (
                            <div className="text-center md:text-left">
                                <Link to={item.link} className="inline-flex items-center gap-1 text-fmgm-green hover:text-fmgm-blue text-sm mt-2">
                                    <span>Ver más</span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <SliderControls
                itemCount={itemCount}
                currentIndex={currentIndex}
                canScrollLeft={canScrollLeft}
                canScrollRight={canScrollRight}
                onPrev={scrollPrev}
                onNext={scrollNext}
                onDotClick={scrollTo}
            />
        </div>
    );
};
