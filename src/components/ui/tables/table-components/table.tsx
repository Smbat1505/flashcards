import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'

export const Table = forwardRef<ElementRef<'table'>, TableProps>(
  ({ children, className, ...rest }, ref) => {
    const Classes = {
      table: clsx(s.table, className),
    }

    return (
      <table className={Classes.table} ref={ref} {...rest}>
        {children}
      </table>
    )
  }
)

interface TableProps extends ComponentPropsWithoutRef<'table'> {
  children?: ReactNode
}
