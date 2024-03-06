import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from './checkbox'

const meta = {
  component: CheckboxDemo,
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
