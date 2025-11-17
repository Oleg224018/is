import type { Meta, StoryObj } from '@storybook/vue3';

import UiSelect from './UiSelect.vue'; 

const meta = {
  title: 'Components/UiSelect',
  component: UiSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    options: {
      control: { type: 'object' },
    },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
} satisfies Meta<typeof UiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Красный', 'Зелёный', 'Синий'],
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    options: ['Опция A', 'Опция B'],
  },
};