export type ContributionType = {
  repo: string;
  owner: string;
  icon: string;
  pulls?: {
    count: number;
    url: string;
  };
  merged?: {
    count: number;
    url: string;
  };
  issues?: {
    count: number;
    url: string;
  };
};

export const contributions: ContributionType[] = [
  {
    repo: 'gatsby',
    owner: 'gatsbyjs',
    icon: 'https://avatars.githubusercontent.com/u/12551863?s=50&v=4',
    pulls: {
      count: 4,
      url: 'https://github.com/gatsbyjs/gatsby/pulls?q=is%3Apr+author%3Ajonrutter+',
    },
    merged: {
      count: 4,
      url: 'https://github.com/gatsbyjs/gatsby/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter',
    },
  },
  {
    repo: 'openverse-frontend',
    owner: 'WordPress',
    icon: 'https://avatars.githubusercontent.com/u/276006?s=50&v=4',
    pulls: {
      count: 2,
      url: 'https://github.com/WordPress/openverse-frontend/pulls?q=is%3Apr+author%3Ajonrutter',
    },
    merged: {
      count: 2,
      url: 'https://github.com/WordPress/openverse-frontend/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter',
    },
  },
  {
    repo: 'content',
    owner: 'mdn',
    icon: 'https://avatars.githubusercontent.com/u/7565578?s=50&v=4',
    pulls: {
      count: 1,
      url: 'https://github.com/mdn/content/pulls?q=is%3Apr+author%3Ajonrutter',
    },
    merged: {
      count: 1,
      url: 'https://github.com/mdn/content/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter',
    },
  },
  {
    repo: 'freeCodeCamp',
    owner: 'freeCodeCamp',
    icon: 'https://avatars.githubusercontent.com/u/9892522?s=50&v=4',
    pulls: {
      count: 1,
      url: 'https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3Ajonrutter',
    },
    merged: {
      count: 1,
      url: 'https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+is%3Amerged+author%3Ajonrutter',
    },
    issues: {
      count: 1,
      url: 'https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aissue+author%3Ajonrutter',
    },
  },
];
