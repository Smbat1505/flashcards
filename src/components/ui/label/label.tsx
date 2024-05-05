// Label.tsx
import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

/**
 * Renders a Label component with specified properties.
 *
 * @param {LabelProps} children - The child elements to be rendered within the Label.
 * @param {string} className - The CSS class for styling the Label.
 * @param {ReactNode} label - The content to be displayed as the Label.
 * @param {...rest} - Additional props to be spread on the Typography component.
 * @return {ReactNode} The rendered Label component.
 */
export const Label: React.FC<LabelProps> = ({
  children,
  className,
  label,
  ...rest
}: LabelProps): ReactNode => {
  return (
    <Typography aria-label={'label'} as={'label'} className={className} variant={'body2'} {...rest}>
      {label}
    </Typography>
  )
}

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  label?: ReactNode
}
