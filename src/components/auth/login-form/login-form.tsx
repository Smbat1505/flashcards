import { useController, useForm } from 'react-hook-form'

import { CheckboxDemo } from '@/components/ui/checkbox'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  console.log('errors: ', errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        labelText={'email'}
      />
      <TextField
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        labelText={'password'}
      />
      <CheckboxDemo {...register('rememberMe')} defaultChecked={value} onChange={onChange}>
        remember me
      </CheckboxDemo>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
