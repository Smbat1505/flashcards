import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './Card.module.scss'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div className={clsx(styles['root'], className)} ref={ref} {...restProps}>
        {children}
      </div>
    )
  }
)

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}
