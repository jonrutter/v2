import type { Variants } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export const useAnimations = (): {
  slideLeft: Variants;
  fadeIn: Variants;
  container: Variants;
} => {
  const shouldReduceMotion = useReducedMotion();

  const slideLeft: Variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : { x: '25%' }),
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return {
    slideLeft,
    fadeIn,
    container,
  };
};
