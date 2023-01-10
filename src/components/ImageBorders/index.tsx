import React from 'react';

export const ImageBorders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="mx-5 relative z-0 before:absolute before:inset-0 before:border before:border-neon-500 dark:before:border-neon-400 before:-translate-x-5 before:-translate-y-5 before:-z-10 before:transition-transform hover:before:-translate-x-0 hover:before:-translate-y-0 after:absolute after:inset-0 after:border after:border-pink-400 after:translate-x-5 after:translate-y-5 after:-z-10 after:transition-transform hover:after:translate-x-0 hover:after:translate-y-0 motion-reduce:before:hover:!-translate-y-5 motion-reduce:before:hover:!-translate-x-5 motion-reduce:after:hover:!translate-y-5 motion-reduce:after:hover:!translate-x-5">
    {children}
  </div>
);
