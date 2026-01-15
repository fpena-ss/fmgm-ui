/**
 * Obtiene los parámetros de preview de la URL actual
 */
export const getPreviewStatus = (): 'published' | 'draft' => {
    if (typeof window === 'undefined') {
        return 'published';
    }
    
    const params = new URLSearchParams(window.location.search);
    const isPreview = params.get('preview') === 'true';
    const status = params.get('status') as 'published' | 'draft';
    
    return isPreview && status === 'draft' ? 'draft' : 'published';
};

/**
 * Construye la URL de la API con el status de preview si es necesario
 */
export const buildApiUrl = (endpoint: string, query: string): string => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const status = getPreviewStatus();
    
    // Si estamos en preview mode y el status es draft, agregar el parámetro
    const separator = query ? '&' : '';
    const statusParam = status === 'draft' ? `${separator}status=draft` : '';
    
    return `${baseUrl}${endpoint}?${query}${statusParam}`;
};
