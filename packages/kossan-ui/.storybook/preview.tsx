import { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import React from 'react';
import { DEFAULT_THEME } from '../';

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      viewports: {
        xs: {
          name: 'xs',
          styles: {
            width: '320px',
            height: '640px',
          },
        },
        sm: {
          name: 'sm',
          styles: {
            width: '600px',
            height: '900px',
          },
        },
        md: {
          name: 'md',
          styles: {
            width: '900px',
            height: '900px',
          },
        },
        lg: {
          name: 'lg',
          styles: {
            width: '1200px',
            height: '900px',
          },
        },
        xl: {
          name: 'xl',
          styles: {
            width: '1536px',
            height: '900px',
          },
        },
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <Emotion10ThemeProvider theme={DEFAULT_THEME}>
          <ThemeProvider theme={DEFAULT_THEME}>
            <Story {...context} />
          </ThemeProvider>
        </Emotion10ThemeProvider>
      );
    },
  ],
};

export default preview;
