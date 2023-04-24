import { Components, Theme, createTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export enum supportedThemes {
    LIGHT = 'light',
    DARK = 'dark'
}


const componentStyles: Components<Omit<Theme, "components">> = {
}

const typography = {
  fontFamily: "Lucida Console"
}
export const lightTheme = createTheme({
    typography: typography,
    palette: {
      mode: 'light',
      text: {
        primary: "#000000"
      },
      primary: {
        main: "#000",
        dark: "#000"
      },
      secondary: {
        main: "#ECECEC",
        dark: "#9A9A9A"
      }
    },
    components: {
      ...componentStyles
    }
  })
  
export const darkTheme = createTheme({
    typography: typography,
    palette: {
      mode: 'dark',
      text: {
        primary: "#FFFFFF"
      },
      primary: {
        main: "#FFF",
        dark: "#FF1"
      },
      secondary: {
        main: "#3A3A3A",
        dark: "#CACACA"
      },
    },
    components: {
      ...componentStyles
    }
  })

export const themeSelector = new Map<supportedThemes, Theme>([
    [supportedThemes.LIGHT, lightTheme],
    [supportedThemes.DARK, darkTheme]
])

export const themeIcons = new Map<supportedThemes, JSX.Element>([
    [supportedThemes.LIGHT, <LightModeIcon />],
    [supportedThemes.DARK, <DarkModeIcon />]
])
