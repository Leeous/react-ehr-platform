import { pluginSvgr } from '@rsbuild/plugin-svgr';
import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "storybook-react-rsbuild", // 🌟 Must be an object with the name parameter
    options: {
      strictMode: true,
    }
  },
  core: {
    builder: {
      name: "storybook-builder-rsbuild", // 🌟 Explicitly tells Storybook to use the Rust builder layer
      options: {
        fsCache: true, // Enables fast Rspack filesystem caching
      }
    }
  },

  async rsbuildFinal(config) {
    config.plugins?.push(pluginSvgr({ svgrOptions: { exportType: 'named' } }));
    return config;
  },
};

export default config;