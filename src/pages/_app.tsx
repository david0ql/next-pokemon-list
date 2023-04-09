import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { darkTheme } from '../../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>)
}
