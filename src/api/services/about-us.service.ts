import qs from 'qs';

export const getAboutUs = async () => {
    const query = qs.stringify({
        populate: {
            images: {
                fields: ['url'],
            },
        },
    }, { encodeValuesOnly: true });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/about-us?${query}`);
    return response.json();
}
