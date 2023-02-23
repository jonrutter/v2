import Head from 'next/head';
import { PageTransition } from '@/components/PageTransition';
import { Portfolio } from '@/scenes/Portfolio';
import { portfolioItems as pI } from '@/data/portfolio';
import type { PortfolioItemType } from '@content/portfolio/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

const PortfolioPage = ({
  portfolioItems,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageTransition>
      <Head>
        <title>My Portfolio | Jon Rutter</title>
        <meta
          name="description"
          content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
        />
      </Head>
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
