import { EmailVerificationCard } from '@/pages/auth/emailVerificationCard'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: EmailVerificationCard,
  decorators: [],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Pages/Email Verification Card',
} satisfies Meta<typeof EmailVerificationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
