import React from 'react';
import { screen, renderWithProviders as render } from '@test/utils';
import { Spinner } from '.';

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner label="loading" />);
    // select the svgs
    const loaders = screen.getAllByRole('img', { name: /loading/i });
    // there should be two svgs
    expect(loaders).toHaveLength(2);
    // the first svg should not be visible when motion is reduced
    expect(loaders[0]).toHaveClass('motion-reduce:hidden');
    // the second svg should be visible when motion is reduced
    expect(loaders[1]).toHaveClass('motion-reduce:block');
  });
});
