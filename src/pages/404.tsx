import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>404</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
