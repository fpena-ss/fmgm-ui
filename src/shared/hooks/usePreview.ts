import { createContext, useContext } from 'react';

export interface PreviewContextValue {
    isPreview: boolean;
    status: 'published' | 'draft';
}

export const PreviewContext = createContext<PreviewContextValue>({
    isPreview: false,
    status: 'published',
});

export const usePreview = () => useContext(PreviewContext);
