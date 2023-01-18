import React from 'react';
import { render, screen } from '@test/utils';
import { About } from '.';

const relevantWords = [
  /front-end/i,
  /accessib[ility|le]/i,
  /react/i,
  /javascript/i,
];

const relevantSkills = [
  /react/i,
  /html/i,
  /javascript/i,
  /typescript/i,
  /gatsby/i,
  /tailwind/i,
];

describe('About Section', () => {
  it('renders the correct content', () => {
    render(<About />);
    // the screen should say 'about me'
    screen.getByText(/about me/i);
    // certain relevant words should be included
    relevantWords.forEach((wordRegex) => {
      // the word should appear at least once
      expect(screen.getAllByText(wordRegex)).not.toHaveLength(0);
    });
    // there should be a picture of me, with appropriate labels
    const profilePicture = screen.getByTestId('profile-picture');
    expect(profilePicture).toHaveAccessibleName();
  });
  it('correctly displays my skills', () => {
    render(<About />);
    // the screen should state my skills
    screen.getByText(/my skills/i);
    // certain skills should be included
    relevantSkills.forEach((skillRegex) => {
      // the skill should appear
      expect(screen.getAllByText(skillRegex)).not.toHaveLength(0);
    });
  });
});
