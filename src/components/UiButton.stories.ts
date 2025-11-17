import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from './UiButton.vue'; 

const meta = {
  title: 'Components/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['submit', 'button'],
    },
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button',
    default: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    layout: 'secondary',
    isDisabled: false,
    type: 'button',
    default: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    layout: 'primary',
    isDisabled: true,
    type: 'button',
    default: 'Disabled Button',
  },
};