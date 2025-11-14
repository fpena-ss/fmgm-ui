export const getHeaderMenu = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/header-menu?populate[logo][fields][0]=url&populate=links`);
    return response.json();
}
