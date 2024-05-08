import { ComponentProps, FC, useMemo } from 'react'

import { Eye, EyeOff } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { getInputFieldClasses } from '@/components/ui/textField/Interdependence/inputFieldClasses'
import { ButtonEvent } from '@/types'

export const PasswordVisibilityToggle: FC<PasswordVisibilityToggleProps> = props => {
  const { isTypePassword, isVisible, onClick, size, ...rest } = props
  const InputFieldClasses = useMemo(() => getInputFieldClasses(props), [props])

  return (
    <SvgWrapper
      SvgComponent={isVisible ? Eye : EyeOff}
      size={size}
      svgClassName={InputFieldClasses.svgIconsClass}
      wrapper={'button'}
      wrapperClassName={InputFieldClasses.svgWrapperClasses}
      {...rest}
      onClick={onClick}
    />
  )
}

interface PasswordVisibilityToggleProps extends ComponentProps<'button'> {
  isTypePassword?: boolean
  isVisible?: boolean
  onClick?: (event?: ButtonEvent) => void
  size?: number | string
}
