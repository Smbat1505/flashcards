import { ReactNode, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type PropsType = {
  children?: ReactNode
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: ((checked: boolean) => void) | undefined
}

export const CheckboxDemo = ({
  children,
  defaultChecked = false,
  disabled,
  onChange,
}: PropsType) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  return (
    <form>
      <div className={s.Container}>
        <label className={s.Label + ' ' + (disabled ? s.TextDisabled : '')}>
          <div className={disabled ? s.DisabledWrapper : s.Ellipse}>
            <Checkbox.Root
              checked={disabled ? defaultChecked : checked}
              className={
                s.CheckboxRoot +
                ' ' +
                (disabled ? s.Disabled : '') +
                ' ' +
                (disabled && checked ? s.DisabledSelected : '') +
                ' ' +
                (checked ? s.Selected : s.Unselected)
              }
              disabled={disabled}
              onCheckedChange={() => {
                if (onChange) {
                  onChange(!checked)
                }
              }}
              onClick={() => setChecked(prevState => !prevState)}
            >
              <Checkbox.Indicator
                className={
                  s.CheckboxIndicator +
                  ' ' +
                  (disabled && checked ? s.CheckboxIndicatorSelectedDisabled : '')
                }
              >
                <CheckIcon className={s.CheckboxIcon} />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <span className={s.LabelText}>{children}</span>
        </label>
      </div>
    </form>
  )
}
