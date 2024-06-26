module.exports = {
  extends: "@it-incubator/eslint-config",
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
        "no-console": "off"
      }
    },
    {
      files: ["src/assets/icons/components/*.tsx"],
      rules: {
        "no-duplicate-imports": "warn"
      }
    }
  ]
};
