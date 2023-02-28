import Link from 'next/link';
import { m } from 'framer-motion';

type Props = {
  selected: boolean;
  href: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<Props> = ({ selected, href, children }) => (
  <li className="relative">
    <Link
      href={href}
      className="p-1 hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors font-serif font-semibold text-lg text-grey-700 dark:text-grey-100 lowercase"
    >
      {children}
    </Link>
    {selected ? (
      <m.div
        className="block h-[2px] bg-current absolute -bottom-px left-1 right-1 transition-colors"
        layoutId="nav-underline"
      />
    ) : null}
  </li>
);
