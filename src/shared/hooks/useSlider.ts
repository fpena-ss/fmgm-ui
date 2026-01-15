import { useRef, useState, useEffect, useCallback } from 'react';

export const useSlider = (itemCount: number) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

        const itemWidth = container.firstElementChild?.clientWidth ?? 0;
        const gap = 24;
        const newIndex = Math.round(scrollLeft / (itemWidth + gap));
        setCurrentIndex(Math.min(newIndex, itemCount - 1));
    }, [itemCount]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', updateScrollState);
        updateScrollState();

        return () => container.removeEventListener('scroll', updateScrollState);
    }, [updateScrollState]);

    const scrollTo = (index: number) => {
        const container = containerRef.current;
        if (!container) return;

        const itemWidth = container.firstElementChild?.clientWidth ?? 0;
        const gap = 24;
        container.scrollTo({
            left: index * (itemWidth + gap),
            behavior: 'smooth',
        });
    };

    const scrollPrev = () => {
        const newIndex = Math.max(0, currentIndex - 1);
        scrollTo(newIndex);
    };

    const scrollNext = () => {
        const newIndex = Math.min(itemCount - 1, currentIndex + 1);
        scrollTo(newIndex);
    };

    return {
        containerRef,
        currentIndex,
        canScrollLeft,
        canScrollRight,
        scrollTo,
        scrollPrev,
        scrollNext,
    };
};
