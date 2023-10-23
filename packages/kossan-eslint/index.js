module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  plugins: ["no-relative-import-paths"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./packages/kossan-core/tsconfig.json",
  },
  rules: {
    "quotes": ["error", "single"],
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      {
        allowSameFolder: true,
        rootDir: "app",
        prefix: "@",
      },
    ],
    "no-unused-vars": "error",
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "always", "propElementValues": "always" }],
    "react/react-in-jsx-scope": "off",
  },
};
