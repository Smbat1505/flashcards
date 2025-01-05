import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm, loginFormValues } from './login-form'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: loginFormValues) => console.log(data),
  },
}
