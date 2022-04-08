## Reproduction for https://github.com/storybookjs/storybook/issues/17914

This is a standard storybook repro repository from `npx sb@next repro` with the following changes:

- Enable `babelModeV7`
- Add a simple babel config (actually unnecessary for the bug but there for correctness).
- Use the webpack5 manager and builder

Run `yarn && yarn storybook` to see it fail.
