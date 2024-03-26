module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'comma-dangle': ['error', '', { arrays: 'always-multiline' }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['methods'],
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
