import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  staticDirs: ['../public'],
};

export default config;
