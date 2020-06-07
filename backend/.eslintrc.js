module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': 'warn',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
