module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  plugins: ['eslint-plugin-testing-library', 'eslint-plugin-jest-dom'],
};
