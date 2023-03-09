module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'prettier', 'jsx-a11y', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
