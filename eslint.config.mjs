const eslintConfig = [
  ...compat.config({
    extends: ["eslint-config-custom"],
    settings: {
      next: {
        rootDir: "apps/*/",
      },
    },
  }),
];

export default eslintConfig;
