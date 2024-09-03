import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupDemo } from '@/components/ui/radiogroup/radioGroup'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: RadioGroupDemo,
  tags: ['autodocs'],
  title: 'Components/ui/RadioGroup',
} satisfies Meta<typeof RadioGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'RadioGroup',
    disabled: false,
    variant: 'Default',
  },
}

export const Disabled: Story = {
  args: {
    children: 'RadioGroup',
    disabled: true,
    variant: 'Default',
  },
}
