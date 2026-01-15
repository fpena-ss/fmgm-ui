import type { ThemeResponse } from '@interfaces/theme';
import { buildApiUrl } from '@api/helpers/preview';

export const getTheme = async (): Promise<ThemeResponse> => {
    const response = await fetch(buildApiUrl('/api/theme', ''));
    
    if (!response.ok) {
        return { data: null };
    }
    
    return response.json();
};
