const path = require("path");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    path.dirname(require.resolve("@storybook/addon-links/package.json")),
    path.dirname(require.resolve("@storybook/addon-a11y/package.json")),
    path.dirname(require.resolve("@storybook/addon-essentials/package.json")),
    path.dirname(require.resolve("@storybook/addon-interactions/package.json")),
  ],
  framework: path.dirname(
    require.resolve("@storybook/react-vite/package.json")
  ),
  docs: {
    autodocs: true,
  },
};
