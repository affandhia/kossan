import type { Meta, StoryObj } from '@storybook/react';

import Invoice from './Invoice';
import DefaultData from './fixtures';

const meta: Meta<typeof Invoice> = {
  title: 'Pattern/Invoice',
  component: Invoice,
};

export default meta;
type Story = StoryObj<typeof Invoice>;

export const Overview: Story = {
  args: {
    data: DefaultData,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};
