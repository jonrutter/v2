import React from 'react';
import type { SkillType } from '@content/portfolio/types';

const neutralColors = ['#000', '#000000', '#fff', '#ffffff'];

export const SkillButton: React.FC<SkillType> = ({ url, color, label }) => {
  const colorIsNeutral = neutralColors.indexOf(color) >= 0;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`py-1 px-2 transition-all text-grey-800 dark:text-white opacity-80 hover:opacity-100 focus:opacity-100 border inline-block ${
        colorIsNeutral ? 'border-black dark:border-white' : ''
      }`}
      style={!colorIsNeutral ? { borderColor: color } : {}}
    >
      {label}
    </a>
  );
};
