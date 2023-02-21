import React from 'react';
import { screen, renderWithProviders as render } from '@/test/utils';
import { Layout } from '.';

const Component = (
  <Layout>
    <h1>Test Heading</h1>
  </Layout>
);

describe('Page layout', () => {
  it('renders the correct content', () => {
    const { container } = render(Component);
    // there should be main, header, nav, and footer landmark regions
    screen.getByRole('main');
    expect(container).toContainHTML('<header');
    expect(container).toContainHTML('<nav');
    expect(container).toContainHTML('<footer');

    // children should be passed through
    screen.getByText(/test heading/i);
  });
  it('renders a skip-to-content link', () => {
    render(Component);
    // a link should exist, with a label containing the word 'skip', and an href to '#main'
    const link = screen.getByRole('link', { name: /skip/i });
    expect(link).toHaveAttribute('href', '#main');
  });
});
