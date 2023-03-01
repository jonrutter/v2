import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  main: Variants;
} => {
  const main: Variants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    main,
  };
};
