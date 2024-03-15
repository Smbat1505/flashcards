import { ReactNode, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type PropsType = {
  children?: ReactNode
  defaultChecked?: boolean
  disabled?: boolean
}

export const CheckboxDemo = ({ children, defaultChecked = false, disabled }: PropsType) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  return (
    <form>
      <div className={s.Container}>
        <label className={disabled ? `${s.Label} ${s.TextDisabled}` : `${s.Label} `}>
          <div className={disabled ? s.DisabledWrapper : s.Ellipse}>
            <Checkbox.Root
              checked={disabled ? defaultChecked : checked}
              // className={
              //   checked ? `${s.CheckboxRoot} ${s.Selected}` : `${s.CheckboxRoot} ${s.Unselected}`
              // }
              //  className={disabled ? `${s.CheckboxRoot} ${s.Disabled}` : `${s.CheckboxRoot}`}
              className={
                s.CheckboxRoot +
                ' ' +
                (disabled ? s.Disabled : '') +
                ' ' +
                (checked ? s.Selected : s.Unselected)
              }
              disabled={disabled}
              onClick={() => setChecked(prevState => !prevState)}
            >
              <Checkbox.Indicator className={s.CheckboxIndicator}>
                <CheckIcon className={s.CheckboxIcon} />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <span className={s.LabelText}>{children}</span>
        </label>

        {/*<label className={disabled ? `${s.Label} ${s.TextDisabled}` : `${s.Label} `}>*/}
        {/*  {children}*/}
        {/*</label>*/}
      </div>
    </form>
  )
}
