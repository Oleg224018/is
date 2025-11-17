import type { Meta, StoryObj } from '@storybook/vue3';

import UiField from './UiField.vue'; 
import UiInput from './UiInput.vue'; 

const meta = {
  title: 'Components/UiField',
  component: UiField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Метка поля',
  },
} satisfies Meta<typeof UiField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Имя пользователя',
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="Введите имя" />
      </UiField>
    `,
  }),
};