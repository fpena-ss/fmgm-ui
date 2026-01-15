import qs from 'qs';

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

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact-us?${query}`);
    return response.json();
}
