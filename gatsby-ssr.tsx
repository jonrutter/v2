import React from 'react';
import type { GatsbySSR } from 'gatsby';

// styles
import './src/assets/styles/main.css';

// fonts
import '@fontsource/seaweed-script';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';

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
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <LazyMotion features={domAnimation}>
    <ColorModeProvider>{element}</ColorModeProvider>
  </LazyMotion>
);

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setPreBodyComponents,
  setHtmlAttributes,
}) => {
  setPreBodyComponents([
    <InjectInitialDarkMode key="inject-initial-dark-mode" />,
  ]);
  setHtmlAttributes({ lang: 'en' });
};
