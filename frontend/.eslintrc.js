module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
  },
  extends: ["plugin:vue/recommended"],
  plugins: ["import", "vue"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts", ".vue"],
    },
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  // add your custom rules here
  rules: {
    "vue/html-self-closing": "off",
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 1,
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/camelcase": "off",
    "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
      },
    ],
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
};
