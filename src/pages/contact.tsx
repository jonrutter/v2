import { PageTransition } from '@/components/PageTransition';
import { Contact } from '@/scenes/Contact';
import { Seo } from '@/components/Seo';

const ContactPage = () => (
  <PageTransition>
    <Seo title="Contact Me | Jon Rutter" />
    <Contact />
  </PageTransition>
);

export default ContactPage;
