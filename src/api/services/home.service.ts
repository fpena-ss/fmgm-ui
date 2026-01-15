import qs from 'qs';
import { buildApiUrl } from '@api/helpers/preview';

export const getHome = async () => {
    const query = qs.stringify({
        populate: {
            Body: {
                on: {
                    'sections.section': {
                        populate: {
                            images: {
                                fields: ['url'],
                            },
                            links: '*',
                        },
                    },
                    'sections.silder-section': {
                        populate: {
                            items: {
                                populate: {
                                    media: {
                                        fields: ['url'],
                                    },
                                },
                            },
                        },
                    },
                    'sections.media-slider': {
                        populate: {
                            media: {
                                fields: ['url'],
                            },
                        },
                    },
                    'sections.text-slider-section': {
                        populate: {
                            items: '*',
                        },
                    },
                },
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(buildApiUrl('/api/inicio', query));
    return response.json();
}
