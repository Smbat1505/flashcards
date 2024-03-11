import { useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type PropsType = {
  defaultChecked: boolean
}

export const CheckboxDemo = (props: PropsType) => {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked)

  console.log(checked)

  return (
    <form>
      <Checkbox.Root
        className={
          checked ? `${s.CheckboxRoot} ${s.Selected}` : `${s.CheckboxRoot} ${s.Unselected}`
        }
        defaultChecked={checked}
        onClick={event => setChecked(prevState => !prevState)}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <CheckIcon className={s.CheckboxIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <button onClick={() => setChecked(true)} type={'button'}>
        Toggle indeterminate
      </button>
    </form>
  )
}
