import React from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';

/** Renders the home page's landing section */
export const Landing = () => (
  <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
    <div className="w-full max-w-[500px] mx-auto">
      <h1 className="flex flex-col mb-6 md:mb-8">
        <span className="text-xl md:text-2xl font-cursive text-pink-600 dark:text-pink-300 mb-2 md:mb-4 transition-all">
          Hi, my name's{' '}
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl font-semibold font-serif text-grey-800 dark:text-white transition-colors">
          Jon Rutter
        </span>
      </h1>
      <p className="text-lg mb-8">
        I'm a front-end engineer specializing in building accessible,
        responsive, and user-focused websites and applications.
      </p>
      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8">
        <div className="grid grid-cols-1">
          <Button as={Link} href="/contact" variant="primary">
            Get in touch
          </Button>
        </div>
        <div className="grid grid-cols-1">
          <Button as={Link} href="/portfolio" variant="secondary">
            My portfolio
          </Button>
        </div>
      </div>
    </div>
  </div>
);
