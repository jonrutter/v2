import React from 'react';

import { GitHubIcon } from '../components/icons/GitHub';
import { LinkedinIcon } from '../components/icons/Linkedin';
import { CodePenIcon } from '../components/icons/CodePen';
import { MastodonIcon } from '../components/icons/Mastodon';

type SocialLink = {
  label: string;
  icon: React.ReactNode;
  url: string;
};

export const links = {
  github: 'https://github.com/jonrutter',
  linkedin: 'https://www.linkedin.com/in/rutterjt/',
  codepen: 'https://codepen.io/jonrutter',
  mastodon: 'https://mstdn.social/@jonrutter',
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    icon: <GitHubIcon className="w-5 h-5" />,
    url: links.github,
  },
  {
    label: 'Linkedin',
    icon: <LinkedinIcon className="w-5 h-5" />,
    url: links.linkedin,
  },
  {
    label: 'CodePen',
    icon: <CodePenIcon className="w-5 h-5" />,
    url: links.codepen,
  },
  {
    label: 'Mastodon',
    icon: <MastodonIcon className="w-5 h-5" />,
    url: links.mastodon,
  },
];
