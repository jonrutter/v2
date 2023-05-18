import React, { createContext, useContext, useEffect, useState } from 'react';

export type ColorMode = 'light' | 'dark';

type ColorModeContextType = {
  mode?: ColorMode;
  toggleMode: (_?: ColorMode) => void;
};

const defaultContext: ColorModeContextType = {
  mode: undefined,
  toggleMode: () => null,
};

const persistMode = (mode: ColorMode) => {
  try {
    localStorage.setItem('theme', mode);
  } catch {
    console.warn('There was a problem persisting the color mode.');
  }
};

const ColorModeContext = createContext(defaultContext);

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initial, setInitial] = useState(true);
  const [mode, setMode] = useState<ColorMode | undefined>(undefined);

  /** Toggles the current color mode, or else sets it to the passed value, and persists to localStorage. */
  const toggleMode = (newMode?: ColorMode) => {
    if (newMode) {
      persistMode(newMode);
      setMode(newMode);
    } else {
      setMode((prev?: ColorMode) => {
        const newMode = prev === 'light' ? 'dark' : 'light';
        persistMode(newMode);
        return newMode;
      });
    }
  };

  // update color mode on first render in client
  useEffect(() => {
    if (initial) {
      setInitial(false);
      const d = window.document.documentElement;
      const p = d.dataset.theme;
      setMode(p === 'light' ? 'light' : 'dark');
    }
  }, [initial]);

  // update `<html>`'s class when state changes
  useEffect(() => {
    if (initial) return;
    if (document.documentElement) {
      if (mode === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  }, [initial, mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

/** Consumes ColorMode context. */
export const useColorMode = (): {
  mode?: 'light' | 'dark';
  toggleMode: (newMode?: 'light' | 'dark') => void;
} => {
  return useContext(ColorModeContext);
};
