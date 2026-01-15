import type { ThemeResponse } from '@interfaces/theme';

export const getTheme = async (): Promise<ThemeResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/theme`);
    
    if (!response.ok) {
        return { data: null };
    }
    
    return response.json();
};
