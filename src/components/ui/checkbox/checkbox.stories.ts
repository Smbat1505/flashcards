import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from './checkbox'

const meta = {
  component: CheckboxDemo,
  tags: ['autodocs'],
  title: 'Components/ui/Checkbox',
} satisfies Meta<typeof CheckboxDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
}
export const DefaultUnChecked: Story = {
  args: {
    defaultChecked: false,
  },
}
export const DefaultCheckedWithText: Story = {
  args: {
    children: 'Check-box',
    defaultChecked: true,
  },
}
export const DefaultUnCheckedWithText: Story = {
  args: {
    children: 'Check-box',
    defaultChecked: false,
  },
}
