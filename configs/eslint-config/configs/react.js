const typescriptEslintConfig = require('./typescript');

/** @type import("eslint-define-config").Override */
const eslintReactOverride = {
  files: ['**/*.jsx', '**/*.tsx'],
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '{react,react-**, **-react}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'react-refresh/only-export-components': 'warn',
    'react/jsx-props-no-spreading': ['error', {
      'exceptions': ['input']
    }],
    'react/react-in-jsx-scope': 'off'
  },
};

/** @type import("eslint-define-config").ESLintConfig */
const eslintReactConfig = {
  ...typescriptEslintConfig,
  overrides: [eslintReactOverride],
};

module.exports = eslintReactConfig;
