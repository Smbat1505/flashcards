import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Eye, EyeOff, Search } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import styles from './textField.module.scss'

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  handleValueChange?: (value: any) => void
  isSearchInputNotEmpty?: boolean
  labelCustomProps?: ComponentProps<'label'>
  labelText?: string
  onEnter?: ComponentProps<'input'>['onKeyDown']
  validationError?: string
  wrapperProps?: ComponentProps<'div'>
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,

    handleValueChange,
    isSearchInputNotEmpty,
    labelCustomProps,
    labelText,
    onChange,
    onEnter,
    onKeyDown,
    placeholder,
    type,
    validationError,
    wrapperProps,
    ...inputRestProps
  } = props

  const [isPasswordVisible, togglePasswordVisibility] = useState(false)
  const isTypeSearch = type === 'search'
  const shouldShowPasswordToggle = type === 'password'
  const resolvedInputType = resolveInputType(type, isPasswordVisible)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event)
    handleValueChange?.(event.currentTarget.value)
  }

  const handleTogglePasswordVisibility = () => {
    togglePasswordVisibility(prevState => !prevState)
  }

  const errorClasses = clsx(styles.error)
  const disabledClass = styles.disabled
  const inputFieldClasses = {
    containerClass: clsx(styles.container, wrapperProps?.className),
    errorClass: errorClasses,
    errorTextClass: styles.errorText,
    inputClass: clsx(styles.input, !!validationError && errorClasses, className),
    inputWrapperClass: clsx(styles.inputWrapper, isTypeSearch && styles.hasIcon),
    labelClass: clsx(
      styles.label,
      inputRestProps.disabled && styles.disabledText,
      labelCustomProps?.className
    ),
    passwordToggle: clsx(styles.passwordToggle, inputRestProps.disabled && disabledClass),
    svgClass: clsx(styles.search, inputRestProps.disabled && disabledClass),
    svgWrapperClasses: clsx(
      styles.SvgWrapper,
      styles.svgIcons,
      isTypeSearch && styles.search,
      shouldShowPasswordToggle && styles.passwordToggle,
      inputRestProps.disabled && disabledClass
    ),
  }

  return (
    <div className={inputFieldClasses.containerClass}>
      {labelText && (
        <Typography as={'label'} className={inputFieldClasses.labelClass} variant={'body2'}>
          {labelText}
        </Typography>
      )}

      <div className={inputFieldClasses.inputWrapperClass}>
        <input
          className={inputFieldClasses.inputClass}
          onChange={handleInputChange}
          placeholder={placeholder}
          ref={ref}
          type={resolvedInputType}
          {...inputRestProps}
        />
        {isTypeSearch && (
          <SvgWrapper
            SvgComponent={Search}
            onClick={() => alert('Заглушка Поиска')}
            svgClassName={inputFieldClasses.svgClass}
            wrapper={'button'}
            wrapperClassName={inputFieldClasses.svgWrapperClasses}
          />
        )}
        {shouldShowPasswordToggle && (
          <SvgWrapper
            onClick={handleTogglePasswordVisibility}
            svgClassName={inputFieldClasses.passwordToggle}
            wrapper={'button'}
            wrapperClassName={inputFieldClasses.svgWrapperClasses}
          >
            {isPasswordVisible ? <EyeOff /> : <Eye />}
          </SvgWrapper>
        )}
      </div>
      {validationError && (
        <Typography className={inputFieldClasses.errorTextClass} variant={'error'}>
          {validationError}
        </Typography>
      )}
    </div>
  )
})

function resolveInputType(inputType: ComponentProps<'input'>['type'], isPasswordVisible: boolean) {
  return inputType === 'password' && isPasswordVisible ? 'text' : inputType
}
