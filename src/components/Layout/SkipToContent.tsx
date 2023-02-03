import React from 'react';

/** Renders a link to skip to the element with id="main" */
export const SkipToContent = () => (
  <a
    href="#main"
    className="fixed top-0 left-0 -translate-x-full focus:translate-x-0 text-grey-800 dark:text-white z-[100] transition-transform py-3 px-6 bg-white dark:bg-grey-800 outline-none focus:ring-2 focus:ring-inset focus:ring-grey-800 dark:focus:ring-white"
  >
    Skip to content
  </a>
);
