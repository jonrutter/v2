import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

type Props = {
  onClick: () => void;
};

export const MobileNavButton: React.FC<Props> = ({ onClick }) => (
  <button
    className="opacity-80 hover:opacity-100 transition-opacity p-2"
    onClick={onClick}
    aria-label="open the navigation menu"
  >
    <Bars3Icon className="h-6 w-6" />
  </button>
);
