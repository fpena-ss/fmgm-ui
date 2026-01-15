import { useMemo, type ReactNode } from 'react';
import { PreviewContext, type PreviewContextValue } from '@shared/hooks/usePreview';

/**
 * Helper para obtener los parámetros de preview de la URL
 */
const getPreviewParams = (): PreviewContextValue => {
    if (typeof window === 'undefined') {
        return { isPreview: false, status: 'published' };
    }
    
    const params = new URLSearchParams(window.location.search);
    const isPreview = params.get('preview') === 'true';
    const status = params.get('status') as 'published' | 'draft' || 'published';
    
    return {
        isPreview,
        status: isPreview ? status : 'published',
    };
};

interface PreviewProviderProps {
    children: ReactNode;
}

export const PreviewProvider = ({ children }: PreviewProviderProps) => {
    const value = useMemo(() => getPreviewParams(), []);
    
    return (
        <PreviewContext.Provider value={value}>
            {children}
        </PreviewContext.Provider>
    );
};
