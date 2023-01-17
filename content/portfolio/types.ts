import { IGatsbyImageData } from 'gatsby-plugin-image';

export type SkillType = {
  label: string;
  color: string;
  url: string;
};

export type PortfolioItemDraftType = {
  title: string;
  description: string;
  demoUrl: string;
  codeUrl?: string;
  type: 'app' | 'website';
  skills: SkillType[];
};

export type PortfolioItemPrebuildType = {
  img: string;
} & PortfolioItemDraftType;

export type PortfolioItemType = {
  img: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  } | null;
  id: string;
} & PortfolioItemDraftType;
