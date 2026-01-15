export interface ThemeColors {
    fmgmBlueColor: string | null;
    fmgmGreenColor: string | null;
    fmgmLimeColor: string | null;
    fmgmBackgroudColor: string | null;
}

export interface ThemeResponse {
    data: ThemeColors | null;
}

// Colores por defecto del tema
export const DEFAULT_THEME: Required<ThemeColors> = {
    fmgmBlueColor: '#002432',
    fmgmGreenColor: '#377964',
    fmgmLimeColor: '#E1E049',
    fmgmBackgroudColor: '#FFFFFF',
};
