import Head from 'next/head';
import { About } from '@/scenes/About';

const AboutPage = () => (
  <>
    <Head>
      <title>About Me | Jon Rutter</title>
      <meta
        name="description"
        content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
      />
    </Head>
    <About />
  </>
);

export default AboutPage;
