import type { Meta, StoryObj } from '@storybook/react'

import { SelectNew } from './'

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
    children: 'Primary Button',
    disabled: false,
  },
}
