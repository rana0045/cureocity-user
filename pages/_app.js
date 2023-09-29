import '@/styles/globals.css';
import { GridProvider } from '@/context/context';
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <GridProvider>
        <Component {...pageProps} />
      </GridProvider>
    </SessionProvider>
  );
}
