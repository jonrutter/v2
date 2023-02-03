import React from 'react';
import type { GatsbyBrowser } from 'gatsby';

// styles
import './src/assets/styles/main.css';

// context providers
import { ColorModeProvider } from './src/context/ColorMode';
import { LazyMotion, domAnimation } from 'framer-motion';
import { PageLoader } from '@/components/PageLoader';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <PageLoader {...props}>{element}</PageLoader>;
  // return element;
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <LazyMotion features={domAnimation}>
    <ColorModeProvider>{element}</ColorModeProvider>
  </LazyMotion>
);
