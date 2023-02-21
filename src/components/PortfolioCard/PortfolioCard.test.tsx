import React from 'react';
import { renderWithProviders as render, screen } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import { PortfolioCard } from '.';
import type { PortfolioItemType } from '@content/portfolio/types';
import { portfolioItems } from '@/data/portfolio';

const props: PortfolioItemType = {
  demoUrl: 'test-demo-url',
  codeUrl: 'test-code-url',
  title: 'Test Portfolio Item',
  description: 'Test Description',
  skills: [
    { label: 'Test Skill 1', url: 'test-skill-url-1', color: '' },
    { label: 'Test Skill 2', url: 'test-skill-url-2', color: '' },
  ],
  img: portfolioItems[0].img,
  id: 'test-id',
  type: 'website',
};

const Component = <PortfolioCard {...props} />;

describe('FlipCard', () => {
  it('renders correctly', () => {
    render(Component);
  });
  it('correctly opens and closes the content', async () => {
    render(Component);
    // the image should appear
    screen.getByAltText('Test Portfolio Item');
    // the content should not initially be in the document
    // close button
    expect(
      screen.queryByRole('button', { name: 'close details' })
    ).not.toBeInTheDocument();
    // heading
    expect(
      screen.queryByRole('heading', { name: props.title })
    ).not.toBeInTheDocument();
    // description
    expect(screen.queryByText(props.description)).not.toBeInTheDocument();
    // skills
    expect(
      screen.queryByRole('link', { name: props.skills[0].label })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: props.skills[1].label })
    ).not.toBeInTheDocument();
    // link to code
    expect(
      screen.queryByRole('link', { name: /view project code/i })
    ).not.toBeInTheDocument();
    // link to demo
    expect(
      screen.queryByRole('link', { name: /view project demo/i })
    ).not.toBeInTheDocument();

    // clicking the main button should display the content
    const openButton = screen.getByRole('button', {
      name: `show details for project ${props.title}`,
    });
    await userEvent.click(openButton);

    // close button
    await screen.findByRole('button', { name: 'close details' });
    // heading
    await screen.findByRole('heading', { name: props.title });
    // description
    await screen.findByText(props.title);
    // skills
    const skill1 = props.skills[0];
    const link1 = await screen.findByRole('link', { name: skill1.label });
    expect(link1).toHaveAttribute('href', skill1.url);
    const skill2 = props.skills[1];
    const link2 = await screen.findByRole('link', { name: skill2.label });
    expect(link2).toHaveAttribute('href', skill2.url);
    // link to code
    const codeLink = await screen.findByRole('link', {
      name: /(view project )?code/i,
    });
    expect(codeLink).toHaveAttribute('href', props.codeUrl);
    // link to demo
    const demoLink = await screen.findByRole('link', {
      name: /(view project )?(demo|(live )?site)/i,
    });
    expect(demoLink).toHaveAttribute('href', props.demoUrl);
  });
  it('makes the project code url optional', async () => {
    const overrideProps = { ...props, codeUrl: undefined };
    render(<PortfolioCard {...overrideProps} />);
    // open the content
    const openButton = screen.getByRole('button', {
      name: `show details for project ${props.title}`,
    });
    await userEvent.click(openButton);

    // there should not be a code url button
    expect(
      screen.queryByRole('link', {
        name: /view project code/i,
      })
    ).not.toBeInTheDocument();
  });
  it('does not break when the skills array is empty', async () => {
    const overrideProps = { ...props, skills: [] };
    render(<PortfolioCard {...overrideProps} />);
    // open the content
    const openButton = screen.getByRole('button', {
      name: `show details for project ${props.title}`,
    });
    await userEvent.click(openButton);

    // there should not be a skill list
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
