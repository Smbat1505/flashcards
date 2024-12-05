import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './index'

const meta = {
  args: { defaultValue: [10, 60], maxValue: 60, minValue: 0 },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/ui/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderStory: Story = {}
