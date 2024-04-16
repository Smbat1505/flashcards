import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'

const meta: Meta<typeof TextField> = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    labelText: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
    },
    onChange: { action: 'changed' },
    placeholder: {
      control: { type: 'radio' },
      options: ['...type your text', '...type your password', '...type your search'],
    },
    size: {
      control: { options: ['small', 'medium', 'large'], type: 'radio' },
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
    },
    value: { control: { type: 'radio' } },
  },
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    labelText: 'Обычный текст',
    placeholder: 'Введите текст...',
    type: 'text',
  },
}
export const Password: Story = {
  args: {
    labelText: 'Пароль',
    placeholder: 'Введите пароль...',
    type: 'password',
  },
}

export const SearchField: Story = {
  args: {
    labelText: 'Поиск',
    placeholder: 'Поиск...',
    type: 'search',
  },
}

export const WithError: Story = {
  args: {
    labelText: 'Текст с ошибкой',
    placeholder: 'Введите текст...',
    type: 'text',
    validationError: 'Ошибка валидации',
  },
}
