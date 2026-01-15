import qs from 'qs';

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

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inicio?${query}`);
    return response.json();
}
