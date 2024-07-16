import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckboxDemo, CheckboxPropsType } from '@/components/ui/checkbox'

type labelProps = {
  labelText: string
}

type Props<T extends FieldValues> = Omit<CheckboxPropsType, 'defaultChecked' | 'onValueChange'> &
  UseControllerProps<T> &
  labelProps

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  labelText,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <CheckboxDemo {...rest} defaultChecked={value} onValueChange={onChange} {...field}>
      {labelText}
    </CheckboxDemo>
  )
}
