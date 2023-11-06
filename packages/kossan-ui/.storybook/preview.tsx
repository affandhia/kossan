import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import React from 'react';
import { DEFAULT_THEME } from '../';

/** @type { import('@storybook/react').Preview } */
const preview = {
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
