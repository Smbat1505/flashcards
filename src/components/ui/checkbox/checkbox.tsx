import { ReactNode, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type PropsType = {
  children?: ReactNode
  defaultChecked?: boolean
  disabled?: boolean
}

export const CheckboxDemo = ({ children, defaultChecked = false }: PropsType) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  return (
    <form>
      <div className={s.Container}>
        <div className={s.Ellipse}>
          <Checkbox.Root
            className={
              checked ? `${s.CheckboxRoot} ${s.Selected}` : `${s.CheckboxRoot} ${s.Unselected}`
            }
            defaultChecked={checked}
            onClick={() => setChecked(prevState => !prevState)}
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <CheckIcon className={s.CheckboxIcon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <label className={s.Label}>{children}</label>
      </div>
    </form>
  )
}
