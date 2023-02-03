import React from 'react';
import { renderWithProviders as render, screen } from '@test/utils';

import { Landing } from '.';

describe('Landing Section', () => {
  it('renders the correct content', () => {
    render(<Landing />);
    // it should have my name
    screen.getByText(/jon rutter/i);
    // it should have a link to my contact page
    screen.getByRole('link', { name: /contact/i });
    // it should have a link to my portfolio
    screen.getByRole('link', { name: /portfolio/i });
  });
});
