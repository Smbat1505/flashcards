import { ComponentProps, FC, ReactElement } from 'react'

import { Close } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { ButtonEvent } from '@/types'

/**
 * Renders a ClearButton component that wraps a Close icon inside an SvgWrapper component.
 *
 * @param {ClearButtonProps} props - The props for the ClearButton component.
 * @param {() => void} props.onClick - The callback function to be called when the ClearButton is clicked.
 * @param {ComponentProps<'button'>} props.rest - The rest of the props for the ClearButton component.
 * @return {ReactElement} The rendered ClearButton component.
 */

export const ClearButton: FC<ClearButtonProps> = ({
  onClick,
  ...rest
}: ClearButtonProps): ReactElement => {
  return <SvgWrapper SvgComponent={Close} wrapper={'button'} {...rest} onClick={onClick} />
}

interface ClearButtonProps extends ComponentProps<'button'> {
  onClick: (event?: ButtonEvent) => void
}
