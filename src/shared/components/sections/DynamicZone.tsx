import type { BodyComponent } from "@interfaces/home";
import { Section } from "./Section";
import { SliderSection } from "./SliderSection";
import { MediaSlider } from "./MediaSlider";
import { TextSliderSection } from "./TextSliderSection";

export const DynamicZone = ({ components }: { components: BodyComponent[] }) => {
    const renderComponent = (component: BodyComponent) => {
        switch (component.__component) {
            case 'sections.section':
                return <Section key={component.id} section={component} />;
            case 'sections.silder-section':
                return <SliderSection key={component.id} slider={component} />;
            case 'sections.media-slider':
                return <MediaSlider key={component.id} media={component} />;
            case 'sections.text-slider-section':
                return <TextSliderSection key={component.id} slider={component} />;
            default:
                return null;
        }
    };

    return <>{components?.map((component) => renderComponent(component))}</>;
};
