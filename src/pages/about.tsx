import { PageTransition } from '@/components/PageTransition';
import { About } from '@/scenes/About';
import { Seo } from '@/components/Seo';

const AboutPage = () => (
  <PageTransition>
    <Seo title="About Me | Jon Rutter" />
    <About />
  </PageTransition>
);

export default AboutPage;
