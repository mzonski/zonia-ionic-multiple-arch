const prettierConfig = require("zonia-config-prettier");

/** @type import("eslint-define-config").ESLintConfig */
const eslintTypescriptConfig = {
  root: false,
  parser: '@typescript-eslint/parser',

  extends: [
    // defaults
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // code guidelines
    'airbnb',
    'airbnb-typescript',
    // libs
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '[iI]gnored',
      },
    ],
    'import/no-named-as-default': 'off',
    "import/no-unresolved": "error",
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': ['warn', prettierConfig],
    /*  // check if further needed. remove after one year from now: 8/8/23
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: true,
      },
    ],
*/
  },
};

module.exports = eslintTypescriptConfig
