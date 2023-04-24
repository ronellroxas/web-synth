
import SynthSelector from '@/components/SynthSelector';
import ThemeToggler from '@/components/ThemeToggler';
import '@/styles/globals.css';
import { CssBaseline, Stack, Theme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Children, useState } from 'react';
import Layout from './layout';
import { darkTheme } from './theme';

export default function App({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(darkTheme);

  const toggleTheme = (selected: Theme | undefined) => {
      setActiveTheme(selected || activeTheme);
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Layout theme={activeTheme} toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
