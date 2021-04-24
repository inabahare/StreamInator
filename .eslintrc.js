module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: ["error", 2,],
    "linebreak-style": ["error", "unix",],
    semi: ["error", "always",],
    "no-trailing-spaces": 0,
    "no-console": "off",
    "comma-dangle": ["error", {
      arrays: "always",
      objects: "always",
      imports: "never",
    },
    ],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true, },
    ],
    strictPropertyInitialization: 0,
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
    "max-len": 0,
    "no-empty-function": 1,
    "@typescript-eslint/no-empty-function": 1,
    curly: 0,
    "arrow-parens": 0,
    "no-restricted-syntax": 1,
    "nonblock-statement-body-position": 0,
    "operator-linebreak": 0,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
