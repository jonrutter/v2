import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  main: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const main: Variants = {
    hidden: {
      opacity: 0,
      // x: reduceMotion ? 0 : -100,
      y: 0,
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      // y: reduceMotion ? 0 : 50,
      transition: {
        duration: 0.2,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    main,
  };
};
