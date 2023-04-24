import { Grow, Theme, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { themeIcons, themeSelector } from "@/pages/theme";
import { styled } from "@mui/material";

type themeTogglerProps = {
    activeTheme: Theme,
    toggleTheme: (selected: Theme) => void
}

function getThemes() {
    const themes: JSX.Element[] = []
    themeSelector.forEach((theme, themeKey) => {
        const icon = themeIcons.get(themeKey)
        themes.push(
            <ToggleButton key={themeKey} value={theme} aria-label={themeKey}>
                {icon}
            </ToggleButton>
        )
    });

    return themes;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .Mui-selected': {
        backgroundColor: theme.palette.secondary.main
    }
}));


export default function ThemeToggler({ activeTheme, toggleTheme }: themeTogglerProps) {
    return (
        <Grow in={true}
            style={{ transitionDelay: "250ms" }}
        >
            <StyledToggleButtonGroup
                value={activeTheme}
                exclusive
                aria-label="theme selector"
                onChange={(_, selected) => toggleTheme(selected)}
            >
                {getThemes()}
            </StyledToggleButtonGroup>
        </Grow>
    )
}