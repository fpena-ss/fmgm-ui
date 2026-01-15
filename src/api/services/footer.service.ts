import qs from 'qs';
import { buildApiUrl } from '@api/helpers/preview';

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

    const response = await fetch(buildApiUrl('/api/footer', query));
    return response.json();
}
