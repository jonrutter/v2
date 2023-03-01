import '@testing-library/jest-dom';

// polyfill fetch
import 'whatwg-fetch';

// window API mocks
import './__mocks__/IntersectionObserver';
import './__mocks__/scrollTo';

// mock server for contact form
import { server } from './mock-contact-form/server';

// a11y matcher
import { toHaveNoViolations } from 'jest-axe';

// extend expect with a11y matcher
expect.extend(toHaveNoViolations);

// initialize mock server before each test
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
