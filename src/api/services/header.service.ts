import qs from 'qs';
import { buildApiUrl } from '@api/helpers/preview';

export const getHeaderMenu = async () => {
    const query = qs.stringify({
        populate: {
            logo: {
                fields: ['url'],
            },
            links: {
                populate: {
                    icon: {
                        fields: ['url'],
                    },
                },
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(buildApiUrl('/api/header-menu', query));
    return response.json();
}
