import { ComponentProps, FC, MouseEvent, ReactElement } from 'react'

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
export const ClearButton: FC<ClearButtonProps> = ({
  onClick,
  ...rest
}: ClearButtonProps): ReactElement => {
  return (
    <SvgWrapper
      SvgComponent={Close}
      wrapper={'button'}
      {...rest}
      onClick={event => onClick(event as unknown as MouseEvent<HTMLButtonElement>)}
    />
  )
}

interface ClearButtonProps extends ComponentProps<'button'> {
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void
}
