import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const ProfilePicture = () => (
  <div className="mx-5 relative z-0 before:absolute before:inset-0 before:border before:border-neon-500 dark:before:border-neon-400 before:-translate-x-5 before:-translate-y-5 before:-z-10 before:transition-transform hover:before:-translate-x-0 hover:before:-translate-y-0 after:absolute after:inset-0 after:border after:border-pink-400 after:translate-x-5 after:translate-y-5 after:-z-10 after:transition-transform hover:after:translate-x-0 hover:after:translate-y-0">
    <StaticImage
      src={'../../assets/images/profile.png'}
      alt="profile picture of Jon Rutter"
      width={400}
      placeholder="blurred"
      quality={100}
      className="hover:filter hover:saturate-150 transition-all"
      data-testid="profile-picture"
    />
  </div>
);
