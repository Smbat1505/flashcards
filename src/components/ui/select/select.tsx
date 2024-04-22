import React, { ReactNode, useState } from 'react'

import { Typography } from '@/components/ui/typography'
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
  options?: Array<{value: string, label: string}>
}

export const SelectNew = React.forwardRef(
  ({ children, ...props }: SelectNewProps, forwardedRef: any) => {
    const [selectOpen, setSelectOpen] = useState<boolean>(false)

    return (
      <>
        <Label className={s.Label + ' ' + (props.disabled ? s.disabled : '')}>
          <Typography variant={'body2'}>{props.label}</Typography>
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
              <SelectPrimitive.Viewport>
                {props.options? props.options?.map(o=><SelectItem value={o.value}>{o.label}</SelectItem>): children}
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
        <SelectPrimitive.ItemText>
          <Typography variant={'body1'}>{children}</Typography>
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
