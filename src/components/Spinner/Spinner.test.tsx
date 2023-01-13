import React from 'react';
import { screen, render } from '@test/utils';
import { Spinner } from '.';

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner label="loading" />);
    screen.getByRole('img', { name: /loading/i });
    // the motion safe version should also be in the dom
    expect(screen.getAllByText(/loading/i)).toHaveLength(2);
  });
});
