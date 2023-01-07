import React from 'react';
import { Button } from '@/components/Button';

/** Renders the home page's landing section */
export const Landing = () => (
  <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
    <div className="w-full max-w-[500px] mx-auto">
      <h1 className="flex flex-col mb-6 md:mb-8">
        <span className="text-xl font-cursive text-pink-600 dark:text-pink-400 mb-4 md:mb-6">
          Hi, my name's{' '}
        </span>
        <span className="text-4xl md:text-6xl font-semibold font-serif">
          Jon Rutter
        </span>
      </h1>
      <p className="text-lg mb-6 md:mb-8 opacity-60">
        I'm a front end engineer specializing in building accessible,
        responsive, and user-focused websites with React.
      </p>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
        <Button to="/#contact" variant="primary">
          Contact me
        </Button>
        <Button to="/portfolio" variant="secondary">
          My portfolio
        </Button>
      </div>
    </div>
  </div>
);
