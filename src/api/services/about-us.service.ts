export const getAboutUs = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/about-us?populate[images][fields][0]=url`);
    return response.json();
}