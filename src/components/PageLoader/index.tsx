import React from 'react';
import { m } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

/**
 * Wraps the entire app. Runs a brief opacity animation on first page load.
 */
export const PageLoader: React.FC<Props> = ({ children }) => (
  <div className="bg-grey-900 h-full min-h-screen">
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.2 }}
    >
      {children}
    </m.div>
  </div>
);
