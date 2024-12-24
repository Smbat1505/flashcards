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
    isAuthenticated: false,
    userInfo: undefined,
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    isAuthenticated: true,
    userInfo: {
      avatar:
        'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
      created: '2023-07-11T18:47:35.115Z',
      email: 'j&johnson@gmail.com',
      id: '4b29a9f4-745a-44eb-8a94-1c85c5650dbe',
      isEmailVerified: true,
      name: 'Paul',
      updated: '2024-05-17T17:02:07.459Z',
    },
  },
}
