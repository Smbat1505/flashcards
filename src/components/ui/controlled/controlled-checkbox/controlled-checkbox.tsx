import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckboxDemo, CheckboxPropsType } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = Omit<CheckboxPropsType, 'defaultChecked' | 'onValueChange'> &
  UseControllerProps<T>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <CheckboxDemo
      {...rest}
      defaultChecked={value}
      disabled={disabled}
      onValueChange={onChange}
      ref={ref}
    >
      {name}
    </CheckboxDemo>
  )
}
