import { CreateNewPassword } from '@/pages/auth/createNewPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Pages/Create New Password',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
