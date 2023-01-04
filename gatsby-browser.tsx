import React from 'react';
import type { GatsbyBrowser } from 'gatsby';

// styles
import './src/styles/main.css';

// fonts
import '@fontsource/seaweed-script';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';

// context providers
import { ColorModeProvider } from './src/context/ColorMode';

// TODO: wrap pages with custom loading component
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <>{element}</>;
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => <ColorModeProvider>{element}</ColorModeProvider>;
