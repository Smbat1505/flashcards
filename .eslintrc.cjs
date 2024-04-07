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
      files: ["src/assets/icons/components/*.tsx"], // применить только к файлам с расширением .tsx
      rules: {
        "no-duplicate-imports": "warn"
      }
    }
  ]
};
