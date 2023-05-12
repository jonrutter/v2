import React from 'react';

export const Logo = () => (
  <svg
    width="48"
    height="48"
    version="1.1"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    className="overflow-visible"
  >
    <title>Jon Rutter</title>
    <circle
      fill="transparent"
      className="fill-transparent stroke-neon-500 dark:stroke-neon-400 dark:drop-shadow-logo transition-all"
      strokeWidth="2"
      cx="50%"
      cy="50%"
      r="23"
    />
    <circle
      className="fill-neon-500 dark:fill-neon-400 transition-colors"
      r="1.85"
      cx="19.398px"
      cy="10.062"
    />
    <line
      className="stroke-neon-500 dark:stroke-neon-400 transition-colors"
      x1="19.398"
      y1="16.188"
      x2="19.398"
      y2="39.18"
      strokeWidth="3.7"
    />
    <circle
      className="fill-neon-500 dark:fill-neon-400 transition-colors"
      r="3.25"
      cx="33.05"
      cy="19.457"
    />
    <line
      className="stroke-neon-500 dark:stroke-neon-400 transition-colors"
      x1="27.882"
      y1="16.188"
      x2="27.882"
      y2="31.276"
      strokeWidth="3.7"
    />
  </svg>
);
