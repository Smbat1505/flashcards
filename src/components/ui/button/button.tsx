import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {/*{showIcon && <img className={s.icon} src={logoutIcon} />}*/}
      {/*<SvgWrapper SvgComponent={ArrowBackOutline} size={'2rem'} wrapper={'button'} />*/}
      {/*{showIcon && <SvgWrapper SvgComponent={LogOut} size={'1rem'} />}*/}
      {/*{showIcon && <SvgWrapper SvgComponent={svgElement} size={'1rem'} />}*/}
      {/*<Typography variant={'subtitle2'}>{rest.children} </Typography>*/}
      {/*{rest.children}*/}
    </Component>
  )
}
