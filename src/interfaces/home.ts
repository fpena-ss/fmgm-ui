import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { Logo } from "./shared";

export type ImagePosition = 'Left' | 'Right' | 'Up' | 'Down';

export type LinkType = 'Button' | 'Link';

export type ComponentType = 
    | 'sections.section' 
    | 'sections.silder-section' 
    | 'sections.media-slider' 
    | 'sections.text-slider-section';

export interface SectionLink {
    id: number;
    type: LinkType;
    text: string;
    url: string;
}

export interface Section {
    __component: 'sections.section';
    id: number;
    title: string;
    text: BlocksContent;
    images: Logo[];
    imagesPosition: ImagePosition;
    links: SectionLink | null;
}

export interface MediaSliderItem {
    id: number;
    media: Logo;
    text: string;
    link: string;
}

export interface SliderSection {
    __component: 'sections.silder-section';
    id: number;
    title: string;
    items: MediaSliderItem[];
}

export interface MediaSlider {
    __component: 'sections.media-slider';
    id: number;
    media: Logo;
    text: string;
    link: string;
}

export interface TextSliderItem {
    id: number;
    title: string;
    text: string;
}

export interface TextSliderSection {
    __component: 'sections.text-slider-section';
    id: number;
    title: string;
    items: TextSliderItem[];
}

export type BodyComponent = Section | SliderSection | MediaSlider | TextSliderSection;

export interface Home {
    data: {
        id: number;
        Body: BodyComponent[];
    }
}
