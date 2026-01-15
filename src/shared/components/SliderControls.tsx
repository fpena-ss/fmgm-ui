import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface SliderControlsProps {
    itemCount: number;
    currentIndex: number;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    onPrev: () => void;
    onNext: () => void;
    onDotClick: (index: number) => void;
}

export const SliderControls = ({
    itemCount,
    currentIndex,
    canScrollLeft,
    canScrollRight,
    onPrev,
    onNext,
    onDotClick,
}: SliderControlsProps) => {
    if (itemCount <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <button
                onClick={onPrev}
                disabled={!canScrollLeft}
                className="p-2 rounded-full border-2 border-fmgm-green text-fmgm-green hover:bg-fmgm-green hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Anterior"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
                {Array.from({ length: itemCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onDotClick(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                                ? 'bg-fmgm-lime w-4'
                                : 'bg-fmgm-green/40 hover:bg-fmgm-green'
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                disabled={!canScrollRight}
                className="p-2 rounded-full border-2 border-fmgm-green text-fmgm-green hover:bg-fmgm-green hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Siguiente"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    );
};
