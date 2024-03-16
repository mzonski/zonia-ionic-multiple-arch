module.exports = {
  root: true,
  plugins: ['zonia'],
  extends: ['plugin:zonia/react'],
  ignorePatterns: ['**/*.test.tsx', '**/*.test.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
