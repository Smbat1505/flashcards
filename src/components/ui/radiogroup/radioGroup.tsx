import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export const RadioGroupDemo = () => {
  return (
    <>
      <RadioGroup.Root defaultValue={'default'}>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item className={s.RadioGroupItem} value={'default'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label>Default</label>
        </div>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item value={'default1'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label>Default1</label>
        </div>
      </RadioGroup.Root>
    </>
  )
}
