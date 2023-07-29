import '@root/styles/globals.css'
import type { AppProps } from 'next/app'
import { Oxygen } from 'next/font/google'

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@root/theme";
import { AnimatePresence } from 'framer-motion';

const oxygen = Oxygen({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <main className={oxygen.className}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ChakraProvider>
  );
}
