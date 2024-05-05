import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'

export const TableBody = forwardRef<ElementRef<'tbody'>, TableBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const Classes = {
      body: clsx(s.tbody, className),
    }

    return (
      <tbody className={Classes.body} ref={ref} {...rest}>
        {children}
      </tbody>
    )
  }
)

interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {
  children?: ReactNode
}
