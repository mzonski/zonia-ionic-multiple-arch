module.exports = {
  root: true,
  plugins: ['zonia'],
  extends: ['plugin:zonia/front'],
  ignorePatterns: ['**/*.test.tsx', '**/*.test.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
