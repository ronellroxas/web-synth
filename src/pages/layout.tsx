import SynthSelector from '@/components/SynthSelector';
import ThemeToggler from '@/components/ThemeToggler';
import WebSynthContextProvider from '@/contexts/WebSynthContextProvider';
import { Stack, Theme } from '@mui/material';

type layoutProps = {
    children: React.ReactElement;
    theme: Theme;
    toggleTheme: (selected: Theme) => void
}


export default function Layout({ children, theme, toggleTheme }: layoutProps) {
    return (
        <WebSynthContextProvider>
            <Stack direction="column" height={1} justifyContent="space-between">
                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                >
                    <SynthSelector />
                    <ThemeToggler activeTheme={theme} toggleTheme={toggleTheme} />
                </Stack>
                {children}
            </Stack>
        </WebSynthContextProvider>
    )
}