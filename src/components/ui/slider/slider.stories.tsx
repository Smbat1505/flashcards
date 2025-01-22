import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './index'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/ui/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

type PropsType = {
  maxValue: number
  minValue: number
  startSliderValues: number[]
}

const ServiceSliderComponent = ({ maxValue, minValue, startSliderValues }: PropsType) => {
  const [sliderValues, setSliderValues] = useState<number[]>(startSliderValues)

  return (
    <Slider
      maxValue={maxValue}
      minValue={minValue}
      onChange={setSliderValues}
      sliderValues={sliderValues}
    />
  )
}

export const Default: Story = {
  args: {
    maxValue: 20,
    minValue: 0,
    onChange: (value: number[]) => console.log(value),
    sliderValues: [0, 20],
  },
  render: () => <ServiceSliderComponent maxValue={20} minValue={0} startSliderValues={[2, 10]} />,
}

export const Default1: Story = {
  args: {
    maxValue: 20,
    minValue: 0,
    onChange: (value: number[]) => console.log(value),
    sliderValues: [0, 20],
  },
  render: () => (
    <ServiceSliderComponent maxValue={200} minValue={100} startSliderValues={[100, 200]} />
  ),
}
