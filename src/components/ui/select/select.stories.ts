import type { Meta, StoryObj } from '@storybook/react'

import { SelectNew } from './select'

const meta = {
  argTypes: {},
  component: SelectNew,
  tags: ['autodocs'],
  title: 'Components/ui/Select',
} satisfies Meta<typeof SelectNew>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    onChange: value => console.log(value),
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
    ],
    placeholder: 'Select...',
  },
}
export const Fullwidth: Story = {
  args: {
    disabled: false,
    fullwidth: true,
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
    ],
    placeholder: 'Select...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select...',
  },
}
