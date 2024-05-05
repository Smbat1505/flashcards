import React, { ComponentProps } from 'react'

import { Close } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'

/**
 * Renders a ClearButton component that wraps a Close icon inside an SvgWrapper component.
 *
 * @param {ClearButtonProps} props - The props for the ClearButton component.
 * @param {() => void} props.onClick - The callback function to be called when the ClearButton is clicked.
 * @param {ComponentProps<'button'>} props.rest - The rest of the props for the ClearButton component.
 * @return {ReactElement} The rendered ClearButton component.
 */
export const ClearButton: React.FC<ClearButtonProps> = ({ onClick, ...rest }) => {
  return <SvgWrapper SvgComponent={Close} wrapper={'button'} {...rest} onClick={onClick} />
}

interface ClearButtonProps extends ComponentProps<'button'> {
  onClick: () => void
}
