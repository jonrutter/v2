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

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    icon: <GitHubIcon className="w-5 h-5" />,
    url: 'https://github.com/jonrutter',
  },
  {
    label: 'Linkedin',
    icon: <LinkedinIcon className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/rutterjt/',
  },
  {
    label: 'CodePen',
    icon: <CodePenIcon className="w-5 h-5" />,
    url: 'https://codepen.io/jonrutter',
  },
  {
    label: 'Mastodon',
    icon: <MastodonIcon className="w-5 h-5" />,
    url: 'https://mstdn.social/@jonrutter',
  },
];
