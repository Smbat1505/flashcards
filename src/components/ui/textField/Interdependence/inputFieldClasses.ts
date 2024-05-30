import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from '@/components/ui/textField/textField.module.scss'

/**
 * Generates the classes for the input field based on the provided props.
 *
 * @param {InputFieldClassesProps} props - The props for generating the input field classes.
 * @param {string} props.className - The additional class name for the input field.
 * @param {ComponentPropsWithoutRef<"input">} props.inputRestProps - The rest props for the input element.
 * @param {boolean} props.isShowClearButton - Indicates whether the clear button should be shown.
 * @param {boolean} props.isTypePassword - Indicates whether the input field is of type password.
 * @param {boolean} props.isTypeSearch - Indicates whether the input field is of type search.
 * @param {ComponentPropsWithoutRef<"label">} props.labelCustomProps - The custom props for the label element.
 * @param {boolean} props.showError - Indicates whether there is an error with the input field.
 * @param {ComponentPropsWithoutRef<"div">} props.wrapperProps - The props for the wrapper div element.
 * @return {Object} - The generated classes for the input field.
 * @property {string} errorClass - The class for the error state.
 * @property {string} errorTextClass - The class for the error text.
 * @property {string} inputClass - The class for the input field.
 * @property {string} inputWrapperClass - The class for the input wrapper.
 * @property {string} labelClass - The class for the label.
 * @property {string} svgClearClass - The class for the clear button.
 * @property {string} svgIconsClass - The class for the SVG icons.
 * @property {string} svgWrapperClasses - The class for the SVG wrapper.
 * @property {string} svgWrapperClassesForClearSvg - The class for the SVG wrapper when the clear button is shown.
 * @property {string} wrapperClass - The class for the wrapper div.
 */
export const getInputFieldClasses = (
  props: InputFieldClassesProps<boolean>
): InputFieldClasses<string> => {
  const {
    className,
    inputRestProps,
    isShowClearButton,
    isTypePassword,
    isTypeSearch,
    labelCustomProps,
    showError,
    wrapperProps,
  } = props

  const errorClasses = styles.error
  const disabledClass = styles.disabled

  return {
    errorClass: errorClasses,
    errorTextClass: styles.errorText,
    inputClass: clsx(
      styles.input,
      isTypePassword && 'password',
      showError && errorClasses,
      isTypeSearch && 'search',
      className
    ),
    inputWrapperClass: clsx(styles.inputWrapper),
    labelClass: clsx(
      styles.label,
      inputRestProps?.disabled && styles.disabledText,
      labelCustomProps?.className
    ),
    svgClearClass: clsx(
      isShowClearButton && styles.clear,
      inputRestProps?.disabled && disabledClass
    ),
    svgIconsClass: clsx(
      styles.svgIcons,
      isTypeSearch && styles.search,
      isTypePassword && styles.password,
      inputRestProps?.disabled && disabledClass
    ),
    svgWrapperClasses: clsx(
      styles.SvgWrapper,
      isTypeSearch && styles.iconLeft,
      isTypePassword && styles.iconRight,
      inputRestProps?.disabled && disabledClass
    ),
    svgWrapperClassesForClearSvg: clsx(
      styles.SvgWrapper,
      isTypeSearch && isShowClearButton ? styles.iconRight : null
    ),
    wrapperClass: clsx(styles.container, wrapperProps?.className),
  }
}

interface InputFieldClassesProps<B> {
  className?: string
  inputRestProps?: ComponentPropsWithoutRef<'input'>
  isShowClearButton?: B
  isTypePassword?: B
  isTypeSearch?: B
  labelCustomProps?: ComponentPropsWithoutRef<'label'>
  showError?: B
  wrapperProps?: ComponentPropsWithoutRef<'div'>
}

interface InputFieldClasses<S> {
  errorClass: S
  errorTextClass: S
  inputClass: S
  inputWrapperClass: S
  labelClass: S
  svgClearClass: S
  svgIconsClass: S
  svgWrapperClasses: S
  svgWrapperClassesForClearSvg: S
  wrapperClass: S
}
