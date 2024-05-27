import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { item } from '@/components/ui/toolbar/animations'
import { Item } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from '@/components/ui/toolbar/toolbar.module.scss'

export const ToolbarItem: FC<ToolbarItemProps> = props => {
  const { children, className, disabled, onSelect, style, ...rest } = props
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <motion.div {...item}>{children}</motion.div>
    </Item>
  )
}

export interface ToolbarItemProps extends ComponentPropsWithoutRef<typeof Item> {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect?: (event: Event) => void
  style?: CSSProperties
}
