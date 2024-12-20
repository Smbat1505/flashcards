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
    imageUrl:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    showAvatar: false,
    userName: 'Павел',
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    imageUrl:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    showAvatar: true,
    userName: 'Павел',
  },
}
