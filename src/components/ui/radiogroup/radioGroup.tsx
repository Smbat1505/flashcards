import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioOptionsType = {
  name: string
  value: string
}

type RadioGroupPropsType = {
  defaultValue: string
  disabled: boolean
  onValueChange: (value: string) => void
  options: Array<RadioOptionsType>
  required: boolean
}

export const RadioGroupDemo = (props: RadioGroupPropsType) => {
  return (
    <>
      <RadioGroup.Root defaultValue={props.defaultValue} onValueChange={props.onValueChange}>
        {props.options.map((opt: RadioOptionsType, key: number) => (
          <div className={s.RadioItemWrapper} key={key}>
            <RadioGroup.Item className={s.RadioGroupItem} id={opt.name} value={opt.value}>
              <RadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadioGroup.Item>
            <label className={s.labelText} htmlFor={'default'}>
              {opt.value}
            </label>
          </div>
        ))}

        <div className={s.RadioItemWrapper}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'default'} value={'default'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.labelText} htmlFor={'default'}>
            Default
          </label>
        </div>
        <div className={s.RadioItemWrapper}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'default1'} value={'default1'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>{' '}
          <label className={s.labelText} htmlFor={'default1'}>
            Default1
          </label>
        </div>
        <div className={s.RadioItemWrapperDisabled}>
          <RadioGroup.Item
            className={s.RadioGroupItem + ' ' + s.disabled}
            disabled
            value={'default2'}
          >
            <RadioGroup.Indicator className={s.RadioGroupIndicator + ' ' + s.disabled} />
          </RadioGroup.Item>
          <label className={s.labelText + ' ' + s.disabled}>Disabled</label>
        </div>
      </RadioGroup.Root>
    </>
  )
}
