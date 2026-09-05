const eslint = require("@eslint/js");

module.exports = [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly"
      }
    }
  }
];
