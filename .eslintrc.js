module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // TODO(#1): Find a way to install this plugin
    // 'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.d.ts', '.vue', '.json'],
      },
    },
  },
  rules: {
    // TODO: Yeah, Nuxt3 is cool, but should we really do this?
    'no-undef': 'off',
  },
  ignorePatterns: ['generated/*', 'data/db/*'],
};
