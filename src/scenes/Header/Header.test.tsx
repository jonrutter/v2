import React from 'react';
import {
  renderWithProviders as render,
  screen,
  waitFor,
  within,
} from '@/test/utils';
import { Header } from '.';
import { socialLinks } from '@/data/socialLinks';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
  });
  it('renders the social links', () => {
    render(<Header />);
  });
  it('renders all of the links correctly', () => {
    render(<Header />);
    [/home/i, /about/i, /contact/i, /portfolio/i].forEach((linkText) => {
      // there should be a link with the given text
      const link = screen.getByText(linkText);
      // the link should have an href
      expect(link).toHaveAttribute('href');
    });
  });
  it('supports toggling light and dark mode', async () => {
    render(<Header />);
    // select the button
    const button = screen.getByLabelText(/dark mode/i);
    // the site should default to a dark theme
    expect(button).toHaveAttribute('data-mode', 'dark');
    // after clicking the bottom, the site should have a light theme
    await userEvent.click(button);
    expect(button).toHaveAttribute('data-mode', 'light');
  });
  it('supports opening and closing the nav dialog', async () => {
    render(<Header />);
    // the dialog should be initially hidden
    expect(screen.queryByTestId('nav-dialog')).not.toBeInTheDocument();
    // after clicking the button, the dialog should appear
    const openButton = screen.getByLabelText('open the navigation menu');
    await userEvent.click(openButton);
    const container = await screen.findByTestId('nav-dialog');
    // the dialog should contain the navigation links
    // there should be four social links, each with a url to the corresponding site
    socialLinks.forEach((socialLink) => {
      // a link with the given label should exist in the document
      const link = within(container).getByLabelText(
        `link to my ${socialLink.label}`
      );
      // that link should point to the correct url
      expect(link).toHaveAttribute('href', socialLink.url);
    });

    // the menu should be able to be closed
    const closeButton = screen.getByLabelText('close the menu');
    await userEvent.click(closeButton);
    waitFor(() => {
      expect(screen.queryByTestId('nav-dialog')).not.toBeInTheDocument();
    });
  });
});
