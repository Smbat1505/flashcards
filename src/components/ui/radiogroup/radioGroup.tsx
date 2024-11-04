import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioOptionsType = {
  label: string
  value: string
}

type RadioGroupPropsType = {
  defaultValue?: string
  disabled?: boolean
  name: string
  onFocus?: () => void
  onValueChange?: (value: string) => void
  options: Array<RadioOptionsType>
  required?: boolean
} & ComponentPropsWithoutRef<'div'>

export const RadioGroupDemo = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupPropsType>(
  (props: RadioGroupPropsType, ref) => {
    const id = useId()

    return (
      <form>
        <RadioGroup.Root
          defaultValue={props.defaultValue}
          disabled={props.disabled}
          name={props.name}
          onFocus={props.onFocus}
          onValueChange={props.onValueChange}
          ref={ref}
        >
          {props.options.map((opt: RadioOptionsType, key: number) => {
            return (
              <div
                className={props.disabled ? s.RadioItemWrapperDisabled : s.RadioItemWrapper}
                key={key}
              >
                <RadioGroup.Item
                  className={s.RadioGroupItem + ' ' + (props.disabled ? s.disabled : '')}
                  disabled={props.disabled}
                  id={id + opt.value}
                  value={opt.value}
                >
                  <RadioGroup.Indicator
                    className={s.RadioGroupIndicator + ' ' + (props.disabled ? s.disabled : '')}
                  />
                </RadioGroup.Item>
                <label
                  className={s.labelText + ' ' + (props.disabled ? s.disabled : '')}
                  htmlFor={id + opt.value}
                >
                  {opt.label}
                </label>
              </div>
            )
          })}
        </RadioGroup.Root>
      </form>
    )
  }
)
