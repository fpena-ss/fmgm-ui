import qs from 'qs';

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

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/header-menu?${query}`);
    return response.json();
}
