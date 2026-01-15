import qs from 'qs';
import { buildApiUrl } from '@api/helpers/preview';

export const getAboutUs = async () => {
    const query = qs.stringify({
        populate: {
            images: {
                fields: ['url'],
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(buildApiUrl('/api/about-us', query));
    return response.json();
}
