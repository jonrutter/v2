import React from 'react';

// credit for spinner svg: https://codepen.io/ingomc/pen/ONrMqe

/** Renders a loading spinner */
export const Spinner: React.FC<{ label: string }> = ({ label }) => (
  <>
    {/* spinner svg */}
    <svg
      viewBox="25 25 50 50"
      className="origin-center animate-rotate-outer motion-reduce:hidden w-16"
      data-testid="spinner"
      role="img"
    >
      <title>{label}</title>
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
    {/* reduced-motion animation */}
    <svg
      viewBox="0 0 64 50"
      className="w-16 hidden motion-reduce:block animate-dots"
      role="img"
    >
      <title>{label}</title>
      <g>
        <circle r="8" cy="25" cx="8" className="fill-pink-400" />
        <circle r="8" cy="25" cx="32" className="fill-pink-400" />
        <circle r="8" cy="25" cx="56" className="fill-pink-400" />
      </g>
    </svg>
  </>
);
