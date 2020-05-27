module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {},
};
