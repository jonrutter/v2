import React from 'react';
import Link from 'next/link';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/Button';
import { Seo } from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Seo title="Not Found" />
      <div className="w-full min-h-content py-16 md:py-36">
        <div className="w-full max-w-[500px] mx-auto">
          <h1 className="flex flex-col mb-6 md:mb-8">
            <span className="text-xl md:text-2xl font-neon text-pink-600 dark:text-white mb-2 md:mb-4 transition-all">
              Oops.{' '}
            </span>
            <span className="text-4xl md:text-6xl font-semibold font-serif text-grey-800 dark:text-white transition-colors">
              404
            </span>
          </h1>

          <p className="text-lg mb-6 md:mb-8">
            Sorry! The page you were looking for does not exit. It may have been
            moved, deleted, or never existed at all. Try going back:
          </p>
          <Button as={Link} href="/">
            Home
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
