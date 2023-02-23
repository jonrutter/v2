import Head from 'next/head';
import { PageTransition } from '@/components/PageTransition';
import { Landing } from '@/scenes/Landing';

const HomePage = () => (
  <PageTransition>
    <Head>
      <title>Jon Rutter | Web Developer</title>
      <meta
        name="description"
        content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
      />
    </Head>
    <Landing />
  </PageTransition>
);

export default HomePage;
