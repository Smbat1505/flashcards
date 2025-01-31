import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components/ui/rating'

const meta = {
  argTypes: {},
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/ui/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const RatingStory: Story = {
  args: {
    changeable: true,
    value: 1,
  },
}
