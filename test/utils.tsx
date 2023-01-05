import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ColorModeProvider } from '@/context/ColorMode';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ColorModeProvider>{children}</ColorModeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
