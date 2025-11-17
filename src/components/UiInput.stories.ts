import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from './UiInput.vue';


const meta = {
  title: 'Components/UiInput',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст...',
  },
} satisfies Meta<typeof UiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 'Пример текста',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Этот инпут отключен',
  },
};