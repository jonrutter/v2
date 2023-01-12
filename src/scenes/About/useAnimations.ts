import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  popUp: Variants;
  skillContainer: Variants;
  slideRight: Variants;
  container: Variants;
  fadeIn: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const skillContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const popUp: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { scale: 0 }),
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slideRight: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { x: '-25%' }),
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
    skillContainer,
    popUp,
    slideRight,
    container,
    fadeIn,
  };
};
