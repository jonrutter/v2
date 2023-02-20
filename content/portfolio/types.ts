import type { StaticImageData } from 'next/image';

export type SkillType = {
  label: string;
  color: string;
  url: string;
};

export type PortfolioItemType = {
  title: string;
  description: string;
  demoUrl: string;
  codeUrl?: string;
  type: 'app' | 'website';
  skills: SkillType[];
  img: StaticImageData;
  id: string;
};
