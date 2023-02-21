import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Landing } from '@/scenes/Landing';
import { About } from '@/scenes/About';
import { Portfolio } from '@/scenes/Portfolio';
import { Contact } from '@/scenes/Contact';
import { portfolioItems as pI } from '@/data/portfolio';
import type { PortfolioItemType } from '@content/portfolio/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Home({
  portfolioItems,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Jon Rutter | Web Developer</title>
        <meta
          name="description"
          content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
        />
      </Head>
      <Layout>
        <div id="home">
          <Landing />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio list={portfolioItems} />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Layout>
    </>
  );
}

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
