import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/ui/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    showAvatar: false,
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    showAvatar: true,
  },
}
