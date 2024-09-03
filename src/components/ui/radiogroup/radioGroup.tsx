import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export const RadioGroupDemo = () => {
  return (
    <>
      <RadioGroup.Root defaultValue={'default'}>
        <div className={s.RadioItemWrapper}>
          <RadioGroup.Item className={s.RadioGroupItem} value={'default'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.labelText}>Default</label>
        </div>
        <div className={s.RadioItemWrapper}>
          <RadioGroup.Item className={s.RadioGroupItem} value={'default1'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.labelText}>Default1</label>
        </div>
        <div className={s.RadioItemWrapperDisabled}>
          <RadioGroup.Item className={s.RadioGroupItem} disabled value={'default1'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.labelTextDisabled}>Disabled</label>
        </div>
      </RadioGroup.Root>
    </>
  )
}
