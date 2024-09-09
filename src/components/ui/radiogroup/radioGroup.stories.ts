import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupDemo } from '@/components/ui/radiogroup/radioGroup'

const meta = {
  argTypes: {},
  component: RadioGroupDemo,
  tags: ['autodocs'],
  title: 'Components/ui/RadioGroup',
} satisfies Meta<typeof RadioGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'blueberry',
    disabled: false,
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
      {
        label: 'Pineapple',
        value: 'pineapple',
      },
      {
        label: 'Apple',
        value: 'apple1',
      },
      {
        label: 'Banana',
        value: 'banana1',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'apple',
    disabled: true,
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
      {
        label: 'Pineapple',
        value: 'pineapple',
      },
      {
        label: 'Apple',
        value: 'apple1',
      },
      {
        label: 'Banana',
        value: 'banana1',
      },
    ],
  },
}
