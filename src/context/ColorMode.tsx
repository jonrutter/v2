import React, { createContext, useContext, useEffect, useState } from 'react';

export type ColorMode = 'light' | 'dark';

type ColorModeContextType = {
  mode: ColorMode;
  toggleMode: (_?: ColorMode) => void;
};

const defaultContext: ColorModeContextType = {
  mode: 'dark',
  toggleMode: () => null,
};

const ColorModeContext = createContext(defaultContext);

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ColorMode>('dark');

  /** Toggles the current color mode, or else sets it to the passed value. */
  const toggleMode = (newMode?: ColorMode) => {
    if (newMode) {
      setMode(newMode);
    } else {
      setMode((prev: ColorMode) => (prev === 'light' ? 'dark' : 'light'));
    }
  };

  // update `<html>`'s class when state changes
  useEffect(() => {
    if (document.documentElement) {
      if (mode === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

/** Consumes ColorMode context. */
export const useColorMode = (): {
  mode: 'light' | 'dark';
  toggleMode: (newMode?: 'light' | 'dark') => void;
} => {
  return useContext(ColorModeContext);
};
