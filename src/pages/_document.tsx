import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="dark" data-theme="dark">
      <Head>
        {/* script to check localStorage for a persisted color mode to inject */}
        <Script
          strategy="beforeInteractive"
          id="inject-initial-color-mode"
        >{`try{let e=localStorage.getItem("theme"),t=document.documentElement;"light"===e&&(t.classList.remove("dark"),t.dataset.theme="light")}catch{console.warn("There was an error reading color theme from localStorage. Defaulting to dark mode.")}`}</Script>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
