import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7B1FA2', // Deep purple, you can change this
    },
    secondary: {
      main: '#F50057', // Pink accent
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
