// your-select.jsx
import React, { ReactNode } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './select.module.scss'

type SelectDemoPropsType = {
  disabled?: boolean
}


export const SelectDemo = (props:SelectDemoPropsType) => (
  <Select.Root disabled={props.disabled}>
    <Select.Trigger aria-label={'Food'} className={s.SelectTrigger}>
      <Select.Value placeholder={'Select…'} />
      <Select.Icon className={s.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={s.SelectContent} position={"popper"}>
        <Select.ScrollUpButton className={s.SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={s.SelectViewport}>

          {/*<Select.Group>*/}
            <SelectItem value={'apple'}>Apple</SelectItem>
            <SelectItem value={'banana'}>Banana</SelectItem>
            <SelectItem value={'blueberry'}>Blueberry</SelectItem>
            <SelectItem value={'grapes'}>Grapes</SelectItem>
            <SelectItem value={'pineapple'}>Pineapple</SelectItem>
          {/*</Select.Group>*/}

        </Select.Viewport>
        <Select.ScrollDownButton className={s.SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)


type selectItemPropsType = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  value: string
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: selectItemPropsType, forwardedRef: any) => {
    return (
      <Select.Item className={classnames(s.SelectItem, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        {/*<Select.ItemIndicator className={s.SelectItemIndicator}>*/}
        {/*  /!*<CheckIcon />*!/*/}
        {/*</Select.ItemIndicator>*/}
      </Select.Item>
    )
  }
)
