import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@libs/queryClient"
import { ThemeProvider } from "./ThemeProvider"

export const ProvidersLayer = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}
