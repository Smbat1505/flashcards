import type { Meta, StoryObj } from '@storybook/react'

import { SelectNew } from "./select";


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
    options: [
      {
        value: "apple",
        label: "Apple"
      },
      {
        value: "blueberry",
        label: "Blueberry"
      },
      {
        value: "grapes",
        label: "Grapes"
      },
    ],
    disabled: false,
    placeholder: 'Select...',
    onChange: (value)=> console.log(value)
  }
}
export const Fullwidth: Story = {
  args: {
    options: [
      {
        value: "apple",
        label: "Apple"
      },
      {
        value: "blueberry",
        label: "Blueberry"
      },
      {
        value: "grapes",
        label: "Grapes"
      },
    ],
    disabled: false,
    placeholder: 'Select...',
    fullwidth: true
  }
}


export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select...'
  }
}

