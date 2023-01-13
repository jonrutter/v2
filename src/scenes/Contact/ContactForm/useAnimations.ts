import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  container: Variants;
  fadeUp: Variants;
  fadeIn: Variants;
} => {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : { y: '25%' }),
    },
    visible: {
      opacity: 1,
      y: 0,
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

  return { container, fadeUp, fadeIn };
};
