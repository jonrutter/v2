import React from 'react';

type Props = {
  onClick: () => void;
};

export const NavDialogButton: React.FC<Props> = ({ onClick }) => (
  <button
    className="text-grey-700 dark:text-grey-200 hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors px-2 font-serif font-semibold text-lg"
    onClick={onClick}
    aria-label="open the navigation menu"
  >
    {/* <Bars3Icon className="h-6 w-6" /> */}
    Menu
  </button>
);
