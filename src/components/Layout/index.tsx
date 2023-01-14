import React from 'react';

import { Header } from '@/scenes/Header';
import { Footer } from '@/scenes/Footer';
import { SkipToContent } from './SkipToContent';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full min-w-screen max-w-screen overflow-x-hidden min-h-screen bg-indigo-50 dark:bg-indigo-900 text-indigo-900 dark:text-white transition-colors">
      <SkipToContent />
      <Header />
      <main className="px-6" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
