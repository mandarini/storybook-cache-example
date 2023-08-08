import type { Meta, StoryObj } from '@storybook/react';
import { Rlv2 } from './rlv2';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Rlv2> = {
  component: Rlv2,
  title: 'Rlv2',
};
export default meta;
type Story = StoryObj<typeof Rlv2>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Rlv2!/gi)).toBeTruthy();
  },
};
