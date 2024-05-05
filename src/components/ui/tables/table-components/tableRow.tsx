import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'

export const TableRow = forwardRef<ElementRef<'tr'>, TableRowProps>(
  ({ children, className, ...rest }, ref) => {
    const ClassName = {
      row: clsx(s.tr, className),
    }

    return (
      <tr className={ClassName.row} ref={ref} {...rest}>
        {children}
      </tr>
    )
  }
)

interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {
  children?: ReactNode
}
