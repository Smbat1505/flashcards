import { signUpFormValues } from '@/components/auth/forms/signUp-form/signUp-schema'
import { SignUp } from '@/pages/auth/signUp/signUp'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Pages/Sign Up',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: signUpFormValues) => console.log(data),
  },
}
