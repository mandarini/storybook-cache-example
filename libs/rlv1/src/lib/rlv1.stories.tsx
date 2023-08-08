import type { Meta, StoryObj } from '@storybook/react';
import { Rlv1 } from './rlv1';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Rlv1> = {
  component: Rlv1,
  title: 'Rlv1',
};
export default meta;
type Story = StoryObj<typeof Rlv1>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Rlv1!/gi)).toBeTruthy();
  },
};
