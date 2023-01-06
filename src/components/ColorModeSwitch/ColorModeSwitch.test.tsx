import React from 'react';
import { screen, render } from '@test/utils';
import { ColorModeSwitch } from '.';
import userEvent from '@testing-library/user-event';

describe('ColorModeSwitch', () => {
  it('renders correctly', () => {
    render(<ColorModeSwitch />);
    // there should be a toggle button
    const button = screen.getByLabelText(/toggle/i);
    // the initial mode should be 'dark'
    expect(button).toHaveAttribute('data-mode', 'dark');
  });
  it('supports toggling the color mode', async () => {
    render(<ColorModeSwitch />);
    // select the button
    const button = screen.getByLabelText(/toggle/i);
    // clicking the button should toggle the color mode
    await userEvent.click(button);
    expect(button).toHaveAttribute('data-mode', 'light');
  });
});
