import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import styles from './Card.module.scss'

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    return <div className={`${clsx(styles['root'], className)}`} ref={ref} {...restProps}></div>
  }
)
