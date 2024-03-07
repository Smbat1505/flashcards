import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type PropsType = {
  defaultChecked: boolean
}

export const CheckboxDemo = (props: PropsType) => (
  <form>
    <Checkbox.Root className={s.CheckboxRoot} defaultChecked={props.defaultChecked}>
      <Checkbox.Indicator className={s.CheckboxIndicator}>
        <CheckIcon className={s.CheckboxIcon}/>
      </Checkbox.Indicator>
    </Checkbox.Root>
  </form>
)
