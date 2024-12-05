import { ChangeEvent, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  defaultValue: number[]
  maxValue: number
  minValue: number
  onChange?: (values: number[]) => void
}

export const Slider = (props: Props) => {
  const { defaultValue, maxValue, minValue, onChange } = props

  console.log(defaultValue, typeof defaultValue)

  const [inputValue, setInputValue] = useState<number[]>(defaultValue)

  const onSliderValueChangeHandler = (value: number[]) => {
    onChange?.(value)
    setInputValue([...value])
  }

  const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue([Number(e.currentTarget.value), inputValue[1]])
    console.log(e.currentTarget.value)
    onChange?.([Number(e.currentTarget.value), inputValue[1]])
  }
  const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue([inputValue[0], Number(e.currentTarget.value)])
    console.log(e.currentTarget.value)
    onChange?.([inputValue[0], Number(e.currentTarget.value)])
  }

  return (
    <form className={s.sliderContainer}>
      <input
        className={s.value}
        onChange={onMinInputChangeHandler}
        type={'number'}
        value={inputValue[0]}
      />
      <SliderRadix.Root
        className={s.SliderRoot}
        defaultValue={defaultValue}
        max={maxValue}
        min={minValue}
        onValueChange={onSliderValueChangeHandler}
        step={1}
        value={inputValue}
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
        value={inputValue[1]}
      />
    </form>
  )
}
