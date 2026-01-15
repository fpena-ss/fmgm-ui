import qs from 'qs';

export const getFooter = async () => {
    const query = qs.stringify({
        populate: {
            info: {
                populate: {
                    legalInfo: {
                        populate: {
                            links: '*',
                        },
                    },
                    contactInfo: {
                        populate: {
                            image: {
                                fields: ['url'],
                            },
                        },
                    },
                    icon: {
                        fields: ['url'],
                    },
                    networks: {
                        populate: {
                            icon: {
                                fields: ['url'],
                            },
                        },
                    },
                },
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/footer?${query}`);
    return response.json();
}
