import React from 'react';

/** Renders a loading spinner */
export const Spinner: React.FC = () => (
  <svg
    viewBox="25 25 50 50"
    className="w-16 origin-center animate-rotate-outer"
    data-testid="spinner"
    role="img"
  >
    <title>Loading</title>
    <circle
      cx="50"
      cy="50"
      r="20"
      strokeDasharray="1, 200"
      strokeDashoffset="0"
      fill="none"
      className="animate-rotate-inner stroke-pink-600 dark:stroke-pink-400 stroke-[3]"
    />
  </svg>
);
