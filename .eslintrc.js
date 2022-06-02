module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "google"
  ],
  plugins: ["prettier"],
  rules: {
    'prettier/prettier': 'error'
  }
};