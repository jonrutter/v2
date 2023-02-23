import Head from 'next/head';
import { PageTransition } from '@/components/PageTransition';
import { About } from '@/scenes/About';

const AboutPage = () => (
  <PageTransition>
    <Head>
      <title>About Me | Jon Rutter</title>
      <meta
        name="description"
        content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
      />
    </Head>
    <About />
  </PageTransition>
);

export default AboutPage;
