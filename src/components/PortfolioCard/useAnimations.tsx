import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  popUp: Variants;
  bgFade: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const popUp = {
    closed: {
      scale: reduceMotion ? 1 : 0.8,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
    exit: {
      scale: reduceMotion ? 1 : 0.8,
      opacity: 0,
      transition: {
        duration: 0.15,
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
