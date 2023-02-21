import React from 'react';
import { screen, renderWithProviders as render } from '@/test/utils';
import userEvent from '@testing-library/user-event';

import { Button } from '.';
import Link from 'next/link';

const mockClickHandler = jest.fn();

const AsButton = (
  <div data-testid="wrapper">
    <Button type="submit" id="test-id" onClick={mockClickHandler}>
      Test Button
    </Button>
  </div>
);

const AsLink = (
  <div data-testid="wrapper">
    <Button as={Link} href="/">
      Test Link
    </Button>
  </div>
);

const AsPrimary = <Button variant="primary">Primary</Button>;

const AsSecondary = <Button variant="secondary">Secondary</Button>;

describe('Button', () => {
  it('renders correctly as a button', async () => {
    render(AsButton);
    // a button should be rendered
    expect(screen.getByTestId('wrapper')).toContainHTML('<button ');

    // text content should be visible
    const button = screen.getByText(/test button/i);

    // props should be passed through
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('id', 'test-id');

    // click handlers should function correctly
    await userEvent.click(button);
    expect(mockClickHandler).toBeCalledTimes(1);
  });
  it('renders correctly as a Next Link', () => {
    render(AsLink);
    // an html link should be rendered
    expect(screen.getByTestId('wrapper')).toContainHTML('<a ');

    // text content should be visible
    const link = screen.getByText(/test link/i);

    // `to` should be passed through as `href`
    expect(link).toHaveAttribute('href', '/');
  });
  it('renders the primary variant correctly', () => {
    render(AsPrimary);
    const button = screen.getByText(/primary/i);
    // primary buttons have a pink border
    expect(button).toHaveClass('border-pink-500');
  });
  it('renders the secondary variant correctly', () => {
    render(AsSecondary);
    const button = screen.getByText(/secondary/i);
    // secondary buttons do not have a pink border
    expect(button).not.toHaveClass('border-pink-500');
  });
});
