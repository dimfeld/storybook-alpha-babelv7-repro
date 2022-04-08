module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  features: {
    babelModeV7: true,
  },
  core: {
    builder: {
      name: 'webpack5',
    },
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/svelte"
}
