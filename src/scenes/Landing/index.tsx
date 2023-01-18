import React from 'react';
import { Button } from '@/components/Button';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';

/** Renders the home page's landing section */
export const Landing = () => {
  const { container, slideUp } = useAnimations();
  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[500px] mx-auto"
      >
        <h1 className="flex flex-col mb-6 md:mb-8">
          <m.span
            variants={slideUp}
            className="text-xl md:text-2xl font-cursive text-pink-600 dark:text-pink-400 mb-2 md:mb-4"
          >
            Hi, my name's{' '}
          </m.span>
          <m.span
            variants={slideUp}
            className="text-4xl md:text-6xl font-semibold font-serif"
          >
            Jon Rutter
          </m.span>
        </h1>
        <m.div variants={slideUp}>
          <p className="text-lg mb-6 md:mb-8 opacity-60">
            I'm a front-end engineer specializing in building accessible,
            responsive, and user-focused websites with modern web development
            best practices.
          </p>
        </m.div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          <m.div variants={slideUp} className="grid grid-cols-1">
            <Button to="/#contact" variant="primary">
              Contact me
            </Button>
          </m.div>
          <m.div variants={slideUp} className="grid grid-cols-1">
            <Button to="/portfolio" variant="secondary">
              My portfolio
            </Button>
          </m.div>
        </div>
      </m.div>
    </div>
  );
};
