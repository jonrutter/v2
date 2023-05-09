import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  popUp: Variants;
  container: Variants;
  fadeIn: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const popUp: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { scale: 0.8 }),
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
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
        delayChildren: 0.6,
      },
    },
  };

  return {
    popUp,
    container,
    fadeIn,
  };
};
