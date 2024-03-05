import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export const CheckboxDemo = () => (
  <Checkbox.Root className={s.CheckboxRoot}>
    <Checkbox.Indicator className={s.CheckboxIndicator}>
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Root>
)
