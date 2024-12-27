import { Login } from '@/pages/auth/login/login'
import { LoginArgs } from '@/services/auth/auth.types'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Pages/Sign In (Login)',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: LoginArgs) => console.log(data),
  },
}
