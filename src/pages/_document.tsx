import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="dark" data-theme="dark">
      <Head>
        <Script id="handle-number-of-visits" strategy="beforeInteractive">
          {`try{let e=localStorage.getItem("numberOfVisits"),t;t=null===e||Number.isNaN(parseInt(e))?1:parseInt(e)+1,localStorage.setItem("numberOfVisits",t),document.documentElement.dataset.visits=t}catch{console.warn("There was an error fetching the number of site visits. This may cause the loader animation to run unnecessarily.")}`}
        </Script>

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
