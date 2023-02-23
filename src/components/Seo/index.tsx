import React from 'react';
import Head from 'next/head';

// TODO: add images

type Props = {
  title: string;
  description?: string | null;
  author?: string | null;
  twitterUsername?: string | null;
  keywords?: string[] | null;
  article?: boolean | null;
  pathname?: string | null;
  children?: React.ReactNode;
};

const defaultSeo: Props = {
  title: 'Jon Rutter | Web Developer',
  description:
    'Jon Rutter is a front-end engineer specializing in creating accessible, responsive, and performant websites and web applications with React.',
  author: 'Jon Rutter',
  twitterUsername: null,
  keywords: [],
  article: false,
  pathname: null,
};

export const Seo: React.FC<Props> = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  author = defaultSeo.author,
  twitterUsername = defaultSeo.twitterUsername,
  keywords = defaultSeo.keywords,
  article = defaultSeo.article,
  pathname = defaultSeo.pathname,
}) => {
  const seo = {
    title,
    description,
    author,
    twitterUsername,
    keywords,
    article,
    pathname: pathname ? `https://www.jonrutter.io${pathname}` : null,
  };

  return (
    <Head>
      {/* title */}
      <title>{seo.title}</title>
      <meta key="og:title" property="og:title" content={seo.title} />
      <meta key="twitter:title" name="twitter:title" content={seo.title} />
      {/* og:type */}
      <meta
        key="og:type"
        property="og:type"
        content={article ? 'article' : 'website'}
      />
      {/* description */}
      {seo.description ? (
        <>
          <meta
            key="description"
            name="description"
            content={seo.description}
          />
          <meta
            key="og:description"
            property="og:description"
            content={seo.description}
          />
          <meta
            key="twitter:description"
            name="twitter:description"
            content={seo.description}
          />
        </>
      ) : null}
      {/* keywords */}
      {seo.keywords && seo.keywords.length > 0 && (
        <meta key="keywords" name="keywords" content={seo.keywords.join(',')} />
      )}
      {/* twitterUsername */}
      {seo.twitterUsername && (
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={seo.twitterUsername}
        />
      )}
      {/* author */}
      {seo.author && <meta key="author" name="author" content={seo.author} />}
      {/* canonical links */}
      {seo.pathname && (
        <>
          <meta key="og:url" property="og:url" content={seo.pathname} />
          <link key="canonical" rel="canonical" href={seo.pathname} />
        </>
      )}
    </Head>
  );
};
