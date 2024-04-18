import React, { ReactNode, useState } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
import * as SelectPrimitive from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectNewProps = {
  children?: ReactNode
  defaultValue?: string
  disabled?: boolean
  fullwidth?: boolean
  label?: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SelectNew = React.forwardRef(
  ({ children, ...props }: SelectNewProps, forwardedRef: any) => {
    const [selectOpen, setSelectOpen] = useState<boolean>(false)

    return (
      <>
        <Label className={s.Label + ' ' + (props.disabled ? s.disabled : '')} htmlFor={'country'}>
          {props.label}
        </Label>
        <SelectPrimitive.Root
          {...props}
          onOpenChange={(open: boolean) => setSelectOpen(open)}
          onValueChange={props.onChange}
        >
          <SelectPrimitive.Trigger
            className={s.SelectTrigger + ' ' + (props.fullwidth ? s.fullwidth : '')}
            ref={forwardedRef}
          >
            <SelectPrimitive.Value placeholder={props.placeholder} />
            <SelectPrimitive.Icon className={props.disabled ? s.SelectIconDisabled : s.SelectIcon}>
              <ChevronDownIcon className={selectOpen ? s.UpIcon : s.DownIcon} />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className={s.SelectContent} position={'popper'}>
              <SelectPrimitive.Viewport className={s.SelectViewport}>
                {children}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </>
    )
  }
)

type SelectItemProps = {
  children?: ReactNode
  value: string
}

export const SelectItem = React.forwardRef(
  ({ children, ...props }: SelectItemProps, forwardedRef: any) => {
    return (
      <SelectPrimitive.Item className={s.SelectItem} {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
