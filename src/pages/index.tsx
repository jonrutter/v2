import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@/components/Layout';
import { Landing } from '@/scenes/Landing';
import { About } from '@/scenes/About';
import { Portfolio } from '@/scenes/Portfolio';
import { Contact } from '@/scenes/Contact';

const HomePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Jon Rutter | Web Developer</title>;
