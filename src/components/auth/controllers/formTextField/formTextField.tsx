import { ReactElement } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/textField'

export const FormTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormTextFieldProps<T>): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...rest} {...field} validationError={error?.message} />
}

type FormTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'onBlur' | 'onChange' | 'validationError'
> &
  UseControllerProps<T>
