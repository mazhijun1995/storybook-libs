import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  "stories": [
    "../packages/**/*.mdx",
    "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-styling-webpack"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    // 确保 Tailwind CSS 插件被包含在 Storybook 的 Vite 配置中
    if (config.plugins) {
      config.plugins.push(tailwindcss());
    } else {
      config.plugins = [tailwindcss()];
    }
    return config;
  }
};
export default config;