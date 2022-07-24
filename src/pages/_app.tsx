import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
