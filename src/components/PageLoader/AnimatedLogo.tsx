import React from 'react';
import { useAnimations } from './useAnimations';
import { m } from 'framer-motion';

// types
type AnimationProps = {
  onLoadingComplete: () => void;
};

export const AnimatedLogo: React.FC<AnimationProps> = ({
  onLoadingComplete,
}) => {
  const { fadeInVariants, circleDrawVariants, containerOutVariants } =
    useAnimations();
  return (
    <m.svg
      width="96"
      height="96"
      version="1.1"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      variants={containerOutVariants}
      initial="start"
      animate="exit"
      onAnimationComplete={onLoadingComplete}
    >
      <m.circle
        strokeWidth="4"
        cx="50%"
        cy="50%"
        r="46"
        className="origin-center -rotate-90 stroke-neon-400 fill-grey-900"
        variants={circleDrawVariants}
        initial="start"
        animate="finish"
        strokeLinecap="round"
      />
      {/* j dot */}
      <m.circle
        r="3.7"
        cx="38.796"
        cy="20.124"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="fill-neon-400"
      />
      {/* j line */}
      <m.line
        className="stroke-neon-400"
        x1="38.796"
        y1="32.376"
        x2="38.796"
        y2="78.36"
        strokeWidth="7.4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
      {/* r dot */}
      <m.circle
        className="fill-neon-400"
        r="6.5"
        cx="66.1"
        cy="38.914"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
      {/* r line */}
      <m.line
        className="stroke-neon-400"
        x1="55.764"
        y1="32.376"
        x2="55.764"
        y2="62.552"
        strokeWidth="7.4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
    </m.svg>
  );
};
