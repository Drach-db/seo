import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css';

const customViewports = {
  mobile1: {
    name: 'Mobile (375px)',
    styles: { width: '375px', height: '667px' },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet (768px)',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop (1200px)',
    styles: { width: '1200px', height: '768px' },
    type: 'desktop',
  },
  desktopXL: {
    name: 'Desktop XL (1280px)',
    styles: { width: '1280px', height: '768px' },
    type: 'desktop',
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        beige: { name: 'Beige', value: '#E9E3D3' },
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  initialGlobals: {
    viewport: { value: 'desktopXL', isRotated: false },
    backgrounds: { value: 'light' },
  },
};

export default preview;
