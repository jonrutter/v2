import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { Open_Sans, Playfair_Display, Seaweed_Script } from '@next/font/google';
import { ColorModeProvider } from '@/context/ColorMode';
import { LazyMotion, domAnimation } from 'framer-motion';

// generate self-hosted fonts
const openSans = Open_Sans({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });
const seaweedScript = Seaweed_Script({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-family-open-sans: ${openSans.style.fontFamily};
          --font-family-playfair-display: ${playfairDisplay.style.fontFamily};
          --font-family-seaweed-script: ${seaweedScript.style.fontFamily};
        }
      `}</style>
      <LazyMotion features={domAnimation}>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </LazyMotion>
    </>
  );
}
