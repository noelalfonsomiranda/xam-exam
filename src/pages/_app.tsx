'use client';
import type { AppProps } from 'next/app'
import ReduxProvider from "@/store/redux-provider";
import "../globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  ) 
}
