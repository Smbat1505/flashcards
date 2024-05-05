import { HTMLAttributes, ReactElement } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '../tables.module.scss'

/**
 * Renders an empty component with specified properties.
 *
 * @param {EmptyProps} props - The properties for customizing the empty component.
 * @return {ReactElement} The rendered empty component.
 */
export const Empty = (props: EmptyProps): ReactElement => {
  const { children = 'There is no data yet! :(', className, mb, mt = '89px', ...rest } = props
  const emptyClassName = clsx(s.table, className)
  const emptyStyle = {
    marginBottom: mb,
    marginTop: mt,
  }

  return (
    <Typography as={'div'} className={emptyClassName} style={emptyStyle} variant={'h2'} {...rest}>
      {children}
    </Typography>
  )
}

interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  mb?: string
  mt?: string
}
