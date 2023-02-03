import React from 'react';
import type { GatsbySSR } from 'gatsby';

// styles
import './src/assets/styles/main.css';

// context providers
import { ColorModeProvider } from './src/context/ColorMode';
import { LazyMotion, domAnimation } from 'framer-motion';

// util components
import { InjectInitialDarkMode } from '@/components/InjectInitialDarkMode';
import { PageLoader } from '@/components/PageLoader';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <PageLoader {...props}>{element}</PageLoader>;
  // return element;
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <LazyMotion features={domAnimation}>
    <ColorModeProvider>{element}</ColorModeProvider>
  </LazyMotion>
);

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setPreBodyComponents,
  setHtmlAttributes,
  setHeadComponents,
}) => {
  // inject dark mode on initial load
  setPreBodyComponents([
    <InjectInitialDarkMode key="inject-initial-dark-mode" />,
  ]);
  // set html language
  setHtmlAttributes({ lang: 'en' });
  // preload fonts
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SeaweedScript/seaweed-script-latin-400-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="seaweedFont400"
    />,
    <link
      rel="preload"
      href="/fonts/PlayfairDisplay/playfair-display-latin-600-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="playfairFont600"
    />,
    <link
      rel="preload"
      href="/fonts/PlayfairDisplay/playfair-display-latin-700-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="playfairFont700"
    />,
    <link
      rel="preload"
      href="/fonts/OpenSans/open-sans-latin-400-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="openSans400"
    />,
    <link
      rel="preload"
      href="/fonts/OpenSans/open-sans-latin-600-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="openSans600"
    />,
  ]);
};
