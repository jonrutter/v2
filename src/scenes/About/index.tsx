import React from 'react';
import { skills } from '@/data/skills';
import { ImageBorders } from '@/components/ImageBorders';
import { StaticImage } from 'gatsby-plugin-image';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';
import { SkillButton } from '@/components/SkillButton';

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:text-grey-600 focus:text-grey-600 dark:hover:text-grey-300 dark:focus:text-grey-300 transition-colors underline inline-flex items-baseline"
  >
    {children}
  </a>
);

/** Renders the home page's about section */
export const About = () => {
  const { skillContainer, popUp } = useAnimations();
  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:justify-between lg:contents-between">
        {/* left / top box - text content */}
        <section className="flex justify-center lg:justify-start">
          <div className="w-full max-w-xl">
            {/* heading */}
            <div className="mb-6 w-auto max-w-fit">
              <h2 className="text-4xl font-semibold font-serif md:text-5xl mb-4 inline-block text-grey-800 dark:text-white transition-colors">
                About me
              </h2>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3"
                aria-hidden
              />
            </div>
            {/* description */}
            <div className="text-lg mb-8">
              <div>
                <p className="mb-4">
                  Hi! I'm Jon, and I'm a front-end software engineer focusing on
                  building performative, accessible, and user-focused websites
                  with modern technologies like TypeScript and React.
                </p>
                <p className="mb-4">
                  I strongly believe that the web should work for everyone. I
                  approach every project with a focus on modern best practices
                  that emphasize accessibility and mobile responsiveness, so
                  that everyone will be able to use my websites, regardless of
                  disability or device type.
                </p>
                <p className="mb-4">
                  I'm also passionate about{' '}
                  <Link href="https://en.wikipedia.org/wiki/Free_and_open-source_software">
                    free and open-source software
                  </Link>
                  . I enjoy contributing to open-source projects like{' '}
                  <Link href="https://github.com/gatsbyjs/gatsby/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter">
                    <img
                      src="https://avatars.githubusercontent.com/u/12551863?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span>Gatsby</span>
                  </Link>
                  ,{' '}
                  <Link href="https://github.com/WordPress/openverse-frontend/pulls?q=is%3Apr+author%3Ajonrutter">
                    <img
                      src="https://avatars.githubusercontent.com/u/276006?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span>WordPress</span>
                  </Link>
                  , and{' '}
                  <Link href="https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter">
                    <img
                      src="https://avatars.githubusercontent.com/u/9892522?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span>freeCodeCamp</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
            {/* skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold font-serif mb-4 text-grey-800 dark:text-white transition-colors">
                My skills
              </h3>
              <div>
                <p className="mb-4 text-lg">
                  Some technologies that I frequently work with include:
                </p>
              </div>
              <m.ul
                variants={skillContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex -mt-3 -ml-4 flex-wrap"
              >
                {skills.map((skill) => (
                  <m.li
                    variants={popUp}
                    key={skill.label}
                    className="mt-3 ml-4 inline-block"
                  >
                    <SkillButton {...skill} />
                  </m.li>
                ))}
              </m.ul>
            </section>
          </div>
        </section>
        {/* right / bottom box - image */}
        <div className="flex items-center justify-center lg:justify-end">
          <ImageBorders>
            <StaticImage
              src={'../../assets/images/profile.png'}
              alt="profile picture of Jon Rutter"
              width={400}
              placeholder="blurred"
              quality={100}
              className="hover:filter hover:saturate-[1.2] transition-all"
              data-testid="profile-picture"
            />
          </ImageBorders>
        </div>
      </div>
    </div>
  );
};
