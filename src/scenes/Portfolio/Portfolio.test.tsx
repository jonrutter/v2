import React from 'react';
import { renderWithProviders as render, screen } from '@/test/utils';
import { Portfolio } from '.';
import { portfolioItems } from '@/data/portfolio';

describe('Portfolio Section', () => {
  it('renders the correct content', () => {
    render(<Portfolio list={portfolioItems} />);
    // it should have a heading
    screen.getByRole('heading', { name: /portfolio/i });
    // it should have a link to view more portfolio items
    screen.getByRole('link', { name: /(see )?more projects/i });
  });
});
