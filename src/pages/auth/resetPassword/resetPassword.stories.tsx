import { ResetPassword } from '@/pages/auth/resetPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ResetPassword,
  tags: ['autodocs'],
  title: 'Pages/Reset Password',
} satisfies Meta<typeof ResetPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
