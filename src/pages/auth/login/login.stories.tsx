import { Login } from '@/pages/auth/login/login'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Pages/Login',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
