export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  create: jest.fn(),
  defaults: {
    xsrfHeaderName: "X-CSRFTOKEN",
    xsrfCookieName: "csrftoken"
  }
};
