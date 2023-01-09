import React from 'react';
import { screen, render } from '@test/utils';
import { Spinner } from '.';

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />);
    screen.getByRole('img', { name: /loading/i });
  });
});
