import React from 'react';
import { Header } from '@/scenes/Header';
import { Footer } from '@/scenes/Footer';
import { SkipToContent } from './SkipToContent';

type Props = {
  route: string;
  children: React.ReactNode;
};

/** Renders all UI common to the site */
export const Layout: React.FC<Props> = ({ route, children }) => {
  return (
    <div className="w-full min-w-screen max-w-screen overflow-x-hidden min-h-screen bg-grey-50 dark:bg-grey-800 text-grey-500 dark:text-grey-400 transition-colors grid grid-cols-1 [grid-template-rows:_auto_1fr_auto]">
      <SkipToContent />
      <Header route={route} />
      {children}
      <Footer />
    </div>
  );
};
