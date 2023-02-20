import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { ColorModeProvider } from '@/context/ColorMode';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </LazyMotion>
    </>
  );
}
