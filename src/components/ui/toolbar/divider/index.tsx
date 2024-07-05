import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'

import { Separator } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from '@/components/ui/toolbar/divider/divider.module.scss'

/**
 * Renders a separator component for a dropdown menu.
 *
 * @return {ReactElement} The rendered separator component.
 */
export const Divider: FC<ComponentPropsWithoutRef<typeof Separator>> = (props): ReactElement => {
  const { className, ...rest } = props

  return <Separator className={clsx(s.divider, className)} {...rest} />
}
