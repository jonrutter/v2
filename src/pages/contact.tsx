import Head from 'next/head';
import { Contact } from '@/scenes/Contact';

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Me | Jon Rutter</title>
      <meta
        name="description"
        content="Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React."
      />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
