import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  container: Variants;
  slideIn: Variants;
  popUp: Variants;
  bgFade: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const container = {
    closed: {
      ...(reduceMotion ? {} : { x: '100%' }),
      opacity: reduceMotion ? 0 : 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: 0.4,
      },
    },
    exit: {
      ...(reduceMotion ? { opacity: 0 } : { x: '100%' }),
      transition: {
        delay: 0,
        duration: 0.3,
      },
    },
  };

  const slideIn = {
    closed: {
      opacity: 0,
      x: reduceMotion ? 0 : '25%',
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const popUp = {
    closed: {
      scale: reduceMotion ? 1 : 0,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
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
        duration: 0.3,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    container,
    slideIn,
    popUp,
    bgFade,
  };
};
