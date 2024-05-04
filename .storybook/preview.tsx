import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import withTheme from './withTheme'
import { themes } from '@storybook/theming'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#18191B' },
      light: { ...themes.normal, appBg: '#fff' },
      current: 'dark',
    },

    docs: {
      toc: {
        headingSelector: 'h1, h2, h3',
      },
    },
    // actions: { argTypes: { onClick: { action: 'clicked' } } },
    actions: { argTypesRegex: '^on.*' },
    handles: ['mouseover', 'click .btn'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Getting started', ['Installation', 'Usage', 'Styling'], 'Components'],
      },
    },
  },
}

export default preview
