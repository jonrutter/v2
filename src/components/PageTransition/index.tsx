import React from 'react';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { main } = useAnimations();
  return (
    <m.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={main}
      transition={{
        type: 'keyframes',
        ease: 'linear',
      }}
      className="px-6"
      id="main"
    >
      {children}
    </m.main>
  );
};
