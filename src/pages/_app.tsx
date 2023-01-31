import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import theme from "../theme";

import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.7"
          />
        </Head>
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
