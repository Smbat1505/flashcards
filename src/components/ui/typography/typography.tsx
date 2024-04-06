import React, { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import style from './typography.module.scss'

export const Typography = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
): React.ReactNode => {
  const { as, children, className, color, size, variant = VARIANTS.body1, ...rest } = props
  const Component = as || 'p'

  const styles = {
    ...(color && { color }),
    ...style,
  }

  return (
    <Component className={`${clsx(style[variant], className)}`} style={styles} {...rest}>
      {children}
    </Component>
  )
}

export const VARIANTS = {
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'link1',
  link2: 'link2',
  overline: 'overline',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
} as const

type Variants = keyof typeof VARIANTS

//types
export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  color?: CSSProperties['color']
  variant?: Variants
} & ComponentPropsWithoutRef<T>
