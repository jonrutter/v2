import type { PortfolioItemType } from '@content/portfolio/types';
import { useStaticQuery, graphql } from 'gatsby';

type DataType = {
  allPortfolioJson: {
    nodes: PortfolioItemType[];
  };
};

export const usePortfolioQuery = (): PortfolioItemType[] => {
  const data = useStaticQuery<DataType>(graphql`
    query HomePagePortfolioQuery {
      allPortfolioJson(limit: 6) {
        nodes {
          title
          description
          demoUrl
          codeUrl
          type
          skills {
            color
            label
            url
          }
          img {
            childImageSharp {
              gatsbyImageData(width: 850, quality: 90, placeholder: BLURRED)
            }
          }
          id
        }
      }
    }
  `);
  return data.allPortfolioJson.nodes;
};
