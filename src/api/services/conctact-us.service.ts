export const getContactUs = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact-us?populate=contactInfo&populate=image`);
    return response.json();
}