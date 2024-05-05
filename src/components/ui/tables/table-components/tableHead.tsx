import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from '../tables.module.scss'

export const TableHead = forwardRef<ElementRef<'thead'>, TableHeadProps>(
  ({ children, className, ...rest }, ref): React.ReactElement => {
    const Classes = {
      head: clsx(s.thead, className),
    }

    return (
      <thead className={Classes.head} ref={ref} {...rest}>
        {children}
      </thead>
    )
  }
)

interface TableHeadProps extends ComponentPropsWithoutRef<'thead'> {
  children?: ReactNode
}
