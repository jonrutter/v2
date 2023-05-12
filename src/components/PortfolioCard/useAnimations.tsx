import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  popUp: Variants;
  bgFade: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const popUp = {
    closed: {
      // scale: reduceMotion ? 1 : 0.7,
      y: reduceMotion ? 0 : '1rem',
      opacity: 0,
    },
    open: {
      // scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 190,
        damping: 24,
      },
    },
    exit: {
      // scale: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : '1rem',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 26,
      },
    },
  };

  const bgFade = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    popUp,
    bgFade,
  };
};
