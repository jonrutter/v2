import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const HomePage: React.FC<PageProps> = () => {
  return <h1>Hello, world!</h1>;
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
