import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'

export const TableHeader = forwardRef<ElementRef<'th'>, TableHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const ClassName = {
      header: clsx(s.th, className),
    }

    return (
      <th className={ClassName.header} ref={ref} {...rest}>
        {children}
      </th>
    )
  }
)

interface TableHeaderProps extends ComponentPropsWithoutRef<'th'> {
  children?: ReactNode
}
