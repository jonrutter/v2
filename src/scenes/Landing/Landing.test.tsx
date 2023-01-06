import React from 'react';
import { render, screen } from '@test/utils';

import { Landing } from '.';

describe('Landing Section', () => {
  it('renders the correct content', () => {
    render(<Landing />);
    // it should have my name
    screen.getByText(/jon rutter/i);
    // it should have a link to my contact page
    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toHaveAttribute('href', '/#contact');
    // it should have a link to my portfolio
    const portfolioLink = screen.getByText(/portfolio/i);
    expect(portfolioLink).toHaveAttribute('href', '/portfolio');
  });
});
