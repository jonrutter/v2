import Head from 'next/head';
import { Landing } from '@/scenes/Landing';

const HomePage = () => (
  <>
    <Head>
      <title>Jon Rutter | Web Developer</title>
      <meta
        name="description"
        content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
      />
    </Head>
    <Landing />
  </>
);

export default HomePage;
