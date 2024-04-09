// your-select.jsx
import React, { ReactNode, useState } from 'react'

import { selectOptionsType } from '@/App'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './select.module.scss'

type SelectDemoPropsType = {
  disabled?: boolean
  fullwidth?: boolean
  label?: string
  onChange: (value: string) => void
  options: Array<selectOptionsType>
  placeholder?: string
}

export const SelectDemo = (props: SelectDemoPropsType) => {
  const [selectOpen, setSelectOpen] = useState<boolean>(false)

  return (
    <>
      <Label className={s.Label + ' ' + (props.disabled ? s.disabled : '')} htmlFor={'country'}>
        {props.label}
      </Label>
      <Select.Root
        disabled={props.disabled}
        onOpenChange={(open: boolean) => setSelectOpen(open)}
        onValueChange={(value: string) => props.onChange(value)}
      >
        <Select.Trigger
          aria-label={'Food'}
          className={s.SelectTrigger + ' ' + (props.fullwidth ? s.fullwidth : '')}
        >
          <Select.Value placeholder={props.placeholder} />
          <Select.Icon className={props.disabled ? s.SelectIconDisabled : s.SelectIcon}>
            <ChevronDownIcon className={selectOpen ? s.UpIcon : s.DownIcon} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent} position={'popper'}>
            <Select.ScrollUpButton className={s.SelectScrollButton}>
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className={s.SelectViewport}>
              {props.options.map((opt, index: number) => (
                <SelectItem key={index} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className={s.SelectScrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  )
}

type selectItemPropsType = {
  children?: ReactNode
  className?: string
  value: string
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: selectItemPropsType, forwardedRef: any) => {
    return (
      <Select.Item className={classnames(s.SelectItem, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
