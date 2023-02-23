import { PageTransition } from '@/components/PageTransition';
import { Portfolio } from '@/scenes/Portfolio';
import { portfolioItems as pI } from '@/data/portfolio';
import type { PortfolioItemType } from '@content/portfolio/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Seo } from '@/components/Seo';

const PortfolioPage = ({
  portfolioItems,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageTransition>
      <Seo title="My Portfolio | Jon Rutter" pathname="/portfolio" />
      <Portfolio list={portfolioItems} />
    </PageTransition>
  );
};

export const getStaticProps: GetStaticProps<{
  portfolioItems: PortfolioItemType[];
}> = async () => {
  const portfolioItems = pI.slice(0, 6);
  return {
    props: {
      portfolioItems,
    },
  };
};

export default PortfolioPage;
