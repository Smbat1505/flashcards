import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from './checkbox'

const meta = {
  component: CheckboxDemo,
  tags: ['autodocs'],
  title: 'Components/ui/Checkbox',
} satisfies Meta<typeof CheckboxDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
}
export const DefaultWithText: Story = {
  args: {
    children: 'Check-box',
    defaultChecked: false,
  },
}
export const DisabledChecked: Story = {
  args: {
    children: 'Check-box',
    defaultChecked: true,
    disabled: true,
  },
}
export const DisabledUnChecked: Story = {
  args: {
    children: 'Check-box',
    defaultChecked: false,
    disabled: true,
  },
}
