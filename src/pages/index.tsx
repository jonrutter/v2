import { PageTransition } from '@/components/PageTransition';
import { Landing } from '@/scenes/Landing';
import { Seo } from '@/components/Seo';

const HomePage = () => (
  <PageTransition>
    <Seo title="Jon Rutter | Web Developer" />
    <Landing />
  </PageTransition>
);

export default HomePage;
