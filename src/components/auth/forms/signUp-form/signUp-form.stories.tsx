import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/components/auth/forms/signUp-form/signUp-form'
import { signUpFormValues } from '@/components/auth/forms/signUp-form/signUp-schema'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: signUpFormValues) => {
      console.log(data)
    },
  },
}
