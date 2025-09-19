import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  }
};

export const Indigo: Story = {
  args: {
    children: 'Button',
    variant: 'indigo',
  }
};

export const Lime: Story = {
  args: {
    children: 'Button',
    variant: 'lime',
  }
};

export const Sm: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: "sm",
  }
};

export const Lg: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: "lg",
  }
};

export const Icon: Story = {
  args: {
    children: '🤫',
    variant: 'default',
    size: "icon",
  }
};