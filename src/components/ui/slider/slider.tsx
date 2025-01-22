import { ChangeEvent } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  maxValue: number
  minValue: number
  onChange: (values: number[]) => void
  sliderValues: number[]
}

export const Slider = (props: Props) => {
  const { maxValue, minValue, onChange, sliderValues } = props

  const onSliderValueChangeHandler = (value: number[]) => {
    onChange(value)
  }

  const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange([Number(e.currentTarget.value), sliderValues[1]])
  }
  const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange([sliderValues[0], Number(e.currentTarget.value)])
  }

  return (
    <form className={s.sliderContainer}>
      <input
        className={s.value}
        onChange={onMinInputChangeHandler}
        type={'number'}
        value={sliderValues[0]}
      />
      <SliderRadix.Root
        className={s.SliderRoot}
        max={maxValue}
        min={minValue}
        onValueChange={onSliderValueChangeHandler}
        step={1}
        value={sliderValues}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={s.SliderThumb}
          defaultValue={minValue}
        />
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={s.SliderThumb}
          defaultValue={maxValue}
        />
      </SliderRadix.Root>
      <input
        className={s.value}
        onChange={onMaxInputChangeHandler}
        type={'number'}
        value={sliderValues[1]}
      />
    </form>
  )
}
