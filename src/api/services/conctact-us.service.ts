import qs from 'qs';
import { buildApiUrl } from '@api/helpers/preview';

export const getContactUs = async () => {
    const query = qs.stringify({
        populate: {
            image: {
                fields: ['url'],
            },
            contactInfo: {
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(buildApiUrl('/api/contact-us', query));
    return response.json();
}
