import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'
export const TableCell = forwardRef<ElementRef<'td'>, TableCellProps>(
  ({ children, className, ...rest }, ref) => {
    const Classes = {
      cell: clsx(s.td, className),
    }

    return (
      <td className={Classes.cell} ref={ref} {...rest}>
        {children}
      </td>
    )
  }
)

interface TableCellProps extends ComponentPropsWithoutRef<'td'> {
  children?: ReactNode
}
