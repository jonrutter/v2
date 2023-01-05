import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'gatsby';

type Props<T extends React.ElementType = typeof Link> = {
  as?: T;
  variant?: 'primary' | 'secondary';
};

export const Button = <T extends React.ElementType = typeof Link>({
  as,
  variant = 'primary',
  children,
  ...rest
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Tag = as || Link;
  return (
    <Tag
      {...rest}
      className={`text-lg font-serif font-bold leading-none py-4 px-10 border-2 bg-transparent transition-colors text-center ${
        variant === 'primary'
          ? 'border-pink-500 dark:border-pink-400 hover:bg-pink-400/30'
          : 'border-indigo-900 dark:border-white  hover:bg-indigo-900/10 dark:hover:bg-white/20'
      }`}
    >
      {children}
    </Tag>
  );
};
