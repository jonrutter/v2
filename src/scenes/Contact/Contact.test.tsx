import React from 'react';
import { renderWithProviders as render, screen, waitFor } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import { Contact } from '.';
import { ENDPOINT } from './ContactForm/api';
import { server, rest } from '@/test/mock-contact-form/server';
import { axe } from 'jest-axe';

const labels = [/name/i, /email/i, /subject/i, /message/i];
const dummyValues = [
  'Test Name',
  'test@email.com',
  'Test Subject',
  'Test Message',
];

describe('Contact section', () => {
  it('renders correctly', () => {
    render(<Contact />);
  });
  it('renders the correct base content', () => {
    render(<Contact />);
    // there should be a heading that says 'Contact me'
    screen.getByRole('heading', { name: /contact/i });
    // there should be a picture on the side
    screen.getByRole('img');
    // there should be form elements
    labels.forEach((label) => {
      screen.getByLabelText(label);
    });
    // there should be a submit button
    screen.getByRole('button', {
      name: /(submit)|(send)/i,
    });
  });
  it('supports updating the form values', async () => {
    render(<Contact />);
    for (const label of labels) {
      // select the input element
      const input = screen.getByLabelText(label);
      const dummyInput = 'test value';
      // the form input value should reflect the value typed in
      await userEvent.type(input, dummyInput);
      await waitFor(() => {
        expect(input).toHaveValue(dummyInput);
      });
    }
  });
  it('gives appropriate error messages', async () => {
    render(<Contact />);
    // select the submit button
    const submitButton = screen.getByRole('button', {
      name: /(submit)|(send)/i,
    });
    // clicking the submit button with empty form values should display error messages
    await userEvent.click(submitButton);
    // error messages should have role="alert"
    const errorMessages = await screen.findAllByRole('alert');
    // there should be 4 error messages (one for each field)
    expect(errorMessages).toHaveLength(4);
    // the error messages should say 'required'
    errorMessages.forEach((error) => {
      expect(error).toHaveTextContent(/required/i);
    });
    // fill in valid values for every input except email
    for (const label of labels) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, 'test');
    }
    // clicking the submit button should now display a single error message for an invalid email
    await userEvent.click(submitButton);
    const patternError = await screen.findByRole('alert');
    expect(patternError).toHaveTextContent(/invalid email/i);
  });
  // TODO: fix this test: see Issue #36
  // it('correctly submits when given valid form inputs', async () => {
  //   render(<Contact />);
  //   // enter correct inputs
  //   let i = 0;
  //   for (const label of labels) {
  //     const input = screen.getByLabelText(label);
  //     await userEvent.type(input, dummyValues[i]);
  //     i++;
  //   }
  //   // click submit button
  //   const submitButton = screen.getByRole('button', {
  //     name: /(submit)|(send)/i,
  //   });
  //   await userEvent.click(submitButton);
  //   // the screen should display a loading spinner
  //   await waitFor(() => {
  //     expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  //   });
  //   // the screen should display a message when the loading is finished
  //   await waitFor(() => {
  //     screen.getByText(/(thank you)|(message sent)/i);
  //   });
  // });
  it('displays an error message if the submission fails for validation', async () => {
    server.use(
      rest.post(ENDPOINT, async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ status: 'validation_failed' }));
      })
    );
    render(<Contact />);
    // enter valid inputs
    let i = 0;
    for (const label of labels) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, dummyValues[i]);
      i++;
    }
    // click submit button
    await userEvent.click(
      screen.getByRole('button', {
        name: /(submit)|(send)/i,
      })
    );
    // an error message should appear
    const error = await screen.findByRole('alert');
    expect(error).toHaveTextContent(/there was an error sending your message/i);
  });
  it('displays an error message if the submission fails with an http error', async () => {
    server.use(
      rest.post(ENDPOINT, async (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<Contact />);
    // enter valid inputs
    let i = 0;
    for (const label of labels) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, dummyValues[i]);
      i++;
    }
    // click submit button
    await userEvent.click(
      screen.getByRole('button', {
        name: /(submit)|(send)/i,
      })
    );
    // an error message should appear
    const error = await screen.findByRole('alert');
    expect(error).toHaveTextContent(/there was an error sending your message/i);
  });
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
