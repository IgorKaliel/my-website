import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';

import * as gtag from '../data/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
