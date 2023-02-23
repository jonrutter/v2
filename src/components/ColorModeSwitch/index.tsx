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
      className="text-grey-800 dark:text-grey-300 hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors p-2"
      data-mode={mode}
    >
      {mode ? (
        <>
          {mode === 'light' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </>
      ) : (
        <span className="block h-5 w-5"></span>
      )}
    </button>
  );
};
