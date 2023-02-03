import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

type Props = {
  onClick: () => void;
};

export const MobileNavButton: React.FC<Props> = ({ onClick }) => (
  <button
    className="text-grey-600 dark:text-grey-300 hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors p-2"
    onClick={onClick}
    aria-label="open the navigation menu"
  >
    <Bars3Icon className="h-6 w-6" />
  </button>
);
