import { useId } from 'react'

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
  onValueChange?: (value: string) => void
  options: Array<RadioOptionsType>
  required?: boolean
}

export const RadioGroupDemo = (props: RadioGroupPropsType) => {
  return (
    <form>
      <RadioGroup.Root
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        name={props.name}
        onValueChange={props.onValueChange}
      >
        {props.options.map((opt: RadioOptionsType, key: number) => {
          const id = useId()

          return (
            <div
              className={props.disabled ? s.RadioItemWrapperDisabled : s.RadioItemWrapper}
              key={key}
            >
              <RadioGroup.Item
                className={s.RadioGroupItem + ' ' + (props.disabled ? s.disabled : '')}
                disabled={props.disabled}
                id={id}
                value={opt.value}
              >
                <RadioGroup.Indicator
                  className={s.RadioGroupIndicator + ' ' + (props.disabled ? s.disabled : '')}
                />
              </RadioGroup.Item>
              <label
                className={s.labelText + ' ' + (props.disabled ? s.disabled : '')}
                htmlFor={id}
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
