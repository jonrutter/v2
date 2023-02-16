import React from 'react';
import { screen, render } from '@test/utils';
import { NextJS, React as ReactSkill } from '@content/portfolio/skills';
import { SkillButton } from '.';

describe('SkillButton', () => {
  it('renders the correct content', () => {
    render(<SkillButton {...ReactSkill} />);
    // the skill's text should appear
    screen.getByText(/react/i);
    // there should be a link in the document
    const link = screen.getByRole('link');
    // the link should have a valid url
    expect(link).toHaveAttribute('href', ReactSkill.url);
    // there should be a border-color property
    expect(link).toHaveStyle({ 'border-color': ReactSkill.color });
  });
  it('renders correctly with neutral skill colors', () => {
    render(<SkillButton {...NextJS} />);
    screen.getByText(/next/i);
    const wrapper = screen.getByRole('link');
    // in skills with neutral colors, the color should be dynamically added with tailwind for accessibility purposes, instead of being injected as a style
    // this ensures the button will be visible in either light or dark mode
    expect(wrapper).not.toHaveStyle({ 'border-color': NextJS.color });
  });
});
