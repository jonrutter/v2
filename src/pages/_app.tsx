import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { Open_Sans, Playfair_Display, Seaweed_Script } from '@next/font/google';
import { ColorModeProvider } from '@/context/ColorMode';
import { LazyMotion, domMax } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';

// generate self-hosted fonts
const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' });
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});
const seaweedScript = Seaweed_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps, router }: AppProps) {
  const { route } = router;
  return (
    <>
      <style jsx global>{`
        html {
          --font-family-open-sans: ${openSans.style.fontFamily};
          --font-family-playfair-display: ${playfairDisplay.style.fontFamily};
          --font-family-seaweed-script: ${seaweedScript.style.fontFamily};
        }
      `}</style>
      <LazyMotion features={domMax}>
        <ColorModeProvider>
          <AnimatePresence mode="wait">
            <Layout route={route}>
              <Component {...pageProps} key={route} />
            </Layout>
          </AnimatePresence>
        </ColorModeProvider>
      </LazyMotion>
    </>
  );
}
