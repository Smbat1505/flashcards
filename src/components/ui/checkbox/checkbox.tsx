import { ReactNode, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckboxPropsType = {
  children?: ReactNode
  defaultChecked?: boolean
  disabled?: boolean
  onValueChange?: (checked: CheckedState) => void
}

export const CheckboxDemo = ({
  children,
  defaultChecked = false,
  disabled,
  onValueChange,
}: CheckboxPropsType) => {
  const [checked, setChecked] = useState<CheckedState>(defaultChecked)

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
              onCheckedChange={(checked: CheckedState) => {
                setChecked(checked)
                if (onValueChange) {
                  onValueChange(checked)
                }
              }}
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
          <Typography className={s.LabelText} variant={'body2'}>
            {children}
          </Typography>
        </label>
      </div>
    </form>
  )
}
