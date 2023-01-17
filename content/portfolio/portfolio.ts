import type { PortfolioItemPrebuildType } from './types';

import {
  React,
  TypeScript,
  MaterialUI,
  CSS,
  Gatsby,
  HTML,
  JavaScript,
  Sass,
  Tailwind,
  StyledComponents,
} from './skills';

export const portfolioItems: PortfolioItemPrebuildType[] = [
  {
    title: 'React Film Database',
    description:
      'React Film Database is a web application that allows users to browse and search for details about films.',
    demoUrl: 'https://rfdb.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/react-film-database',
    type: 'app',
    skills: [React, Tailwind, TypeScript],
    img: 'images/rfdb.png',
  },
  {
    title: 'TaskList',
    description:
      'TaskList is a lightweight, intuitive, open source to-do list app, that supports tagging and filtering tasks by labels, due date, and priority level.',
    demoUrl: 'https://tasklist-rutterjt.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/tasklist',
    type: 'app',
    skills: [React, TypeScript, MaterialUI],
    img: 'images/tasklist.png',
  },
  {
    title: 'Bringing Glory',
    description:
      'A website that I built for a family ministry. Built with Gatsby and a headless CMS. Features a light/dark mode switcher.',
    demoUrl: 'https://www.bringingglory.com/',
    codeUrl: '',
    type: 'website',
    skills: [Gatsby, JavaScript, React, StyledComponents],
    img: './images/bringingglory.png',
  },
  {
    title: 'Blogr Landing Page',
    description:
      'A demo landing page for a fictional blogging platform, with interactive navigation components. Built with Gatsby and Tailwind CSS, and deployed with Netlify.',
    demoUrl: 'https://jonrutter-blogr-landing-page.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/blogr-demo',
    type: 'website',
    skills: [Gatsby, JavaScript, React, Tailwind],
    img: './images/blogr.png',
  },
  {
    title: 'Fylo Landing Page',
    description: 'A demo landing page for a fictitious cloud storage company.',
    demoUrl: 'https://jonrutter-fylo-landing-page.netlify.app/',
    codeUrl: 'https://github.com/rutterjt-archive/front-end-projects',
    type: 'website',
    skills: [HTML, JavaScript, Sass],
    img: './images/fylo.png',
  },
  {
    title: 'Manage Landing Page',
    description:
      'A demo landing page for a fictitious software company, with various interactive elements.',
    demoUrl: 'https://jonrutter-manage-landing.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/manage-demo',
    type: 'website',
    skills: [CSS, JavaScript, React],
    img: './images/manage.png',
  },
  {
    title: 'React Quiz',
    description:
      "A quiz game, built with TypeScript, React, and Tailwind CSS. Fetches questions and answers from the Open Trivia Database API, keeps track of the user's answers, and gives real-time feedback.",
    demoUrl: 'https://jonrutter-quiz.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/ts-quiz',
    type: 'app',
    skills: [React, Tailwind, TypeScript],
    img: './images/quiz.png',
  },
  {
    title: 'Grocery List',
    description:
      'A lightweight, intuitive grocery list progressive web app, built with TypeScript, React, and Tailwind CSS.',
    demoUrl: 'https://jonrutter-grocery.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/grocery-list',
    type: 'app',
    skills: [React, Tailwind, TypeScript],
    img: './images/grocery.png',
  },
  {
    title: 'Shortly Landing Page',
    description:
      'A demo landing page for a web analytics company, with functioning demoUrl shortener component.',
    demoUrl: 'https://jonrutter-url-shortener.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/shortly-demo',
    type: 'website',
    skills: [CSS, JavaScript, React],
    img: './images/shortly.png',
  },
  {
    title: 'Insure Landing Page',
    description: 'A demo landing page for a fictitious insurance company.',
    demoUrl: 'https://jonrutter-insure-landing-page.netlify.app/',
    codeUrl: 'https://github.com/rutterjt-archive/front-end-projects',
    type: 'website',
    skills: [HTML, JavaScript, Sass],
    img: './images/insure.png',
  },
  {
    title: 'Huddle Landing Page',
    description:
      'A demo landing page for a fictional software company. Built with Gatsby and Tailwind CSS, and deployed with Netlify.',
    demoUrl: 'https://jonrutter-huddle.vercel.app/',
    codeUrl: 'https://github.com/jonrutter/huddle-demo',
    type: 'website',
    skills: [Gatsby, JavaScript, React, Tailwind],
    img: './images/huddle.png',
  },
  {
    title: 'Splitter Tip Calculator',
    description:
      'A tip calculator. Allows users to input a price, tip, and split amount, and calculates the per-person tip and price.',
    demoUrl: 'https://jonrutter-splitter.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/tip-calculator-app',
    type: 'app',
    skills: [CSS, JavaScript, React],
    img: './images/splitter.png',
  },
  {
    title: 'Markdown Previewer',
    description:
      'A markdown previewer. Users can enter text in the editor in markdown format, and see it rendered in real time.',
    demoUrl: 'https://jonrutter-markdown-previewer.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/markdown-previewer-app',
    type: 'app',
    skills: [CSS, JavaScript, React],
    img: './images/markdown.png',
  },
];

export const portfolioItemsJson = JSON.stringify(portfolioItems);
