import React from 'react';
import { useColorMode } from '@/context/ColorMode';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

// TODO: create a custom animated SVG for the icon

/** Renders a button that toggles the site's color mode */
export const ColorModeSwitch = () => {
  const { mode, toggleMode } = useColorMode();

  return (
    <button
      onClick={() => toggleMode()}
      aria-label="toggle between light and dark mode"
      className="opacity-80 hover:opacity-100 transition-opacity p-2"
      data-mode={mode}
    >
      {mode === 'light' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};
