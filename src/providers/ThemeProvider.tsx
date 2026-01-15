import { useEffect, useMemo, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { themeQueryOptions } from '@api/queries/theme.query';
import { DEFAULT_THEME, type ThemeColors } from '@interfaces/theme';

/**
 * Aplica los colores del tema como CSS custom properties en el :root
 */
const applyThemeColors = (colors: Required<ThemeColors>) => {
    const root = document.documentElement;
    root.style.setProperty('--color-fmgm-blue', colors.fmgmBlueColor);
    root.style.setProperty('--color-fmgm-green', colors.fmgmGreenColor);
    root.style.setProperty('--color-fmgm-lime', colors.fmgmLimeColor);
    root.style.setProperty('--color-fmgm-background', colors.fmgmBackgroudColor);
};

/**
 * Combina los colores de la API con los valores por defecto
 * Si un color no viene de la API, usa el valor por defecto
 */
const mergeWithDefaults = (apiColors: ThemeColors | null): Required<ThemeColors> => {
    if (!apiColors) {
        return DEFAULT_THEME;
    }
    
    return {
        fmgmBlueColor: apiColors.fmgmBlueColor || DEFAULT_THEME.fmgmBlueColor,
        fmgmGreenColor: apiColors.fmgmGreenColor || DEFAULT_THEME.fmgmGreenColor,
        fmgmLimeColor: apiColors.fmgmLimeColor || DEFAULT_THEME.fmgmLimeColor,
        fmgmBackgroudColor: apiColors.fmgmBackgroudColor || DEFAULT_THEME.fmgmBackgroudColor,
    };
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { data } = useQuery(themeQueryOptions);
    
    const colors = useMemo(
        () => mergeWithDefaults(data?.data ?? null),
        [data?.data]
    );
    
    // Aplicar colores por defecto inmediatamente al montar
    useEffect(() => {
        applyThemeColors(DEFAULT_THEME);
    }, []);
    
    // Aplicar colores cuando cambien
    useEffect(() => {
        applyThemeColors(colors);
    }, [colors]);
    
    return <>{children}</>;
};
