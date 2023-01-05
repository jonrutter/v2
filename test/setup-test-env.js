import '@testing-library/jest-dom';

// polyfill fetch
import 'whatwg-fetch';

// window API mocks
import './__mocks__/IntersectionObserver';
import './__mocks__/scrollTo';

// mock server for contact form
import { server } from './mock-contact-form/server';

// initialize mock server before each test
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
