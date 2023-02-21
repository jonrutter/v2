import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ColorModeProvider } from '@/context/ColorMode';

export * from '@testing-library/react';

export const renderWithProviders = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'wrapper'> = {}
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ColorModeProvider>{children}</ColorModeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};
