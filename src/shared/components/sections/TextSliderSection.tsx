import type { TextSliderSection as TextSliderSectionType } from "@interfaces/home";
import { useSlider } from "@shared/hooks/useSlider";
import { SliderControls } from "@shared/components/SliderControls";

export const TextSliderSection = ({ slider }: { slider: TextSliderSectionType }) => {
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
        <div className="py-12 bg-fmgm-blue/5 rounded-xl">
            <h2 className="text-3xl font-bold text-fmgm-blue mb-8 text-center">{slider.title}</h2>
            <div 
                ref={containerRef}
                className="flex gap-6 overflow-x-auto pb-4 px-6 scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {slider.items?.map((item) => (
                    <div key={item.id} className="shrink-0 w-80 p-6 bg-white rounded-lg border-2 border-fmgm-green">
                        {item.title && (
                            <h3 className="text-xl font-semibold text-fmgm-blue mb-2">{item.title}</h3>
                        )}
                        <p className="text-fmgm-blue/80">{item.text}</p>
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
