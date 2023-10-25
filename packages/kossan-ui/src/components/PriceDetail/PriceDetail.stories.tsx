import type { Meta, StoryObj } from '@storybook/react';

import Component from './PriceDetail';
import DefaultData from './fixtures';

const meta: Meta<typeof Component> = {
  title: 'Pattern/PriceDetail',
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Overview: Story = {
  args: DefaultData,
};
