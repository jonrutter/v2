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
      'A web application that allows users to browse and search for various information about their favorite films.',
    demoUrl: 'https://rfdb.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/react-film-database',
    type: 'app',
    skills: [React, Tailwind, TypeScript],
    img: 'images/rfdb.png',
  },
  {
    title: 'TaskList',
    description:
      'A lightweight, intuitive, open source to-do list app. It supports creating, updating, and deleting tasks, as well as filtering and sorting tasks by label, due date, and priority level.',
    demoUrl: 'https://tasklist-rutterjt.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/tasklist',
    type: 'app',
    skills: [React, TypeScript, MaterialUI],
    img: 'images/tasklist.png',
  },
  {
    title: 'Bringing Glory',
    description:
      'A client website that I built for an online family ministry. The website features a fully responsive front-end, and a back-end content management system for easy content editing.',
    demoUrl: 'https://www.bringingglory.com/',
    codeUrl: '',
    type: 'website',
    skills: [Gatsby, JavaScript, React, StyledComponents],
    img: './images/bringingglory.png',
  },
  {
    title: 'Blogr Landing Page',
    description:
      'A demo landing page for a fictional blogging platform. Features a fully responsive design with interactive navigation components.',
    demoUrl: 'https://jonrutter-blogr-landing-page.netlify.app/',
    codeUrl: 'https://github.com/jonrutter/blogr-demo',
    type: 'website',
    skills: [Gatsby, JavaScript, React, Tailwind],
    img: './images/blogr.png',
  },
  {
    title: 'Fylo Landing Page',
    description:
      'A demo landing page for a fictitious cloud storage company. Features a fully responsive design.',
    demoUrl: 'https://jonrutter-fylo-landing-page.netlify.app/',
    codeUrl: 'https://github.com/rutterjt-archive/front-end-projects',
    type: 'website',
    skills: [HTML, JavaScript, Sass],
    img: './images/fylo.png',
  },
  {
    title: 'Manage Landing Page',
    description:
      'A demo landing page for a fictitious software company. Features a fully responsive design with various interactive page components.',
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
      "A lightweight, easy-to-use grocery list web app. Supports adding and deleting grocery list items.  It is a progressive web app, so it can be saved directly to the user's home screen, and used offline.",
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
    description: 'A demo landing page for a fictional software company.',
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
