import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof TextField> = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    labelText: {
      control: { type: 'multi-select' },
      options: ['Default', 'password', 'search'],
    },
    onChange: { action: 'changed' },
    onClearClick: { action: 'cleared' },
    placeholder: {
      control: { type: 'multi-select' },
      options: ['Enter text...', 'Enter password...', 'Enter search...'],
    },

    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
    },
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

export const Universal: Story = {
  args: {
    labelText: 'text',
    onChange: action('onChange'),
    onClearClick: action('onClearClick'),
    placeholder: 'Enter text...',
    type: 'text',
    validationError: 'validation error',
  },
}
