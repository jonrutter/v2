import React from 'react';
import { renderWithProviders as render, screen } from '@/test/utils';
import { Footer } from '.';
import { axe } from 'jest-axe';
import { links } from '@/data/socialLinks';

describe('Footer', () => {
  it('renders the correct content', () => {
    render(<Footer />);
    // it should say 'copyright', and have the current year
    screen.getByText(`Copyright ${new Date().getFullYear()},`);
    // it should have my name somewhere as text
    screen.getByText(/jon rutter/i);
    // it should contain a link to my github
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', links.github);
  });
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
