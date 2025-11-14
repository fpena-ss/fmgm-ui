export const getHome = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inicio?populate[logo][fields][0]=url`);
    return response.json();
}