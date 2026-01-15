import { queryOptions } from '@tanstack/react-query';
import { getTheme } from '@api/services/theme.service';

export const themeQueryOptions = queryOptions({
    queryKey: ['theme'],
    queryFn: getTheme,
    staleTime: 1000 * 60 * 60, // 1 hora - los colores no cambian frecuentemente
    gcTime: 1000 * 60 * 60 * 24, // 24 horas en cache
});
