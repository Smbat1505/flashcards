import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './index'

const meta = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/ui/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarWithImage: Story = {
  args: {
    imageAltText: 'Ivan',
    imageUrl: 'https://img.freepik.com/free-photo/portrait-robot-scifi_23-2151843187.jpg',
  },
}

export const AvatarWithText: Story = {
  args: {
    fallbackAvatarText: 'FG',
    imageAltText: 'Ivan',
    imageUrl: undefined,
  },
}
