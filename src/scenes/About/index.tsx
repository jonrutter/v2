import React from 'react';
import { skills } from '@/data/skills';
import { ImageBorders } from '@/components/ImageBorders';
import { StaticImage } from 'gatsby-plugin-image';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';

/** Renders the home page's about section */
export const About = () => {
  const { container, skillContainer, popUp, slideRight, fadeIn } =
    useAnimations();
  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:justify-between lg:contents-between">
        {/* left / top box - text content */}
        <m.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="w-full max-w-xl">
            {/* heading */}
            <m.div variants={slideRight} className="mb-6 w-auto max-w-fit">
              <h2 className="text-4xl font-semibold font-serif md:text-5xl mb-4 inline-block">
                About me
              </h2>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3"
                aria-hidden
              />
            </m.div>
            {/* description */}
            <div className="text-lg mb-8">
              <m.div variants={fadeIn}>
                <p className="mb-4 opacity-60">
                  Hi! I'm Jon, and I'm a front end engineer focusing on building
                  performative, accessible, and user-focused websites with
                  JavaScript and React.
                </p>
              </m.div>
              <m.div variants={fadeIn}>
                <p className="mb-4 opacity-60">
                  I feel strongly that the web should work for everyone. I
                  prioritize accessiblility and mobile-responsiveness, so that
                  my websites and applications will work for people, regardless
                  of disability or device type. I'm always trying to learn more
                  about how to make my websites and applications even better!
                </p>
              </m.div>
              <m.div variants={fadeIn}>
                <p className="mb-4">
                  <span className="opacity-60">
                    I'm also passionate about contributing to open source
                    projects. Some of my contributions include{' '}
                  </span>
                  <a
                    href="https://github.com/gatsbyjs/gatsby/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/12551863?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                      Gatsby
                    </span>
                  </a>
                  <span className="opacity-60">, </span>
                  <a
                    href="https://github.com/WordPress/openverse-frontend/pulls?q=is%3Apr+author%3Ajonrutter"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/276006?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                      WordPress
                    </span>
                  </a>
                  <span className="opacity-60">, and </span>
                  <a
                    href="https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/9892522?s=50&v=4"
                      alt=""
                      className="h-5 w-5 mr-1"
                    />
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                      freeCodeCamp
                    </span>
                  </a>
                  <span className="opacity-60">.</span>
                </p>
              </m.div>
            </div>
            {/* skills */}
            <section className="mb-8">
              <m.h3
                variants={fadeIn}
                className="text-2xl font-semibold font-serif mb-4"
              >
                My skills
              </m.h3>
              <m.div variants={fadeIn}>
                <p className="mb-4 opacity-60 text-lg">
                  Some technologies I regularly work with:
                </p>
              </m.div>
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
                    <a
                      style={{ borderColor: skill.color }}
                      href={skill.url}
                      className="py-1 px-2 opacity-80 hover:opacity-100 transition-opacity border inline-block"
                    >
                      {skill.label}
                    </a>
                  </m.li>
                ))}
              </m.ul>
            </section>
          </div>
        </m.section>
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
