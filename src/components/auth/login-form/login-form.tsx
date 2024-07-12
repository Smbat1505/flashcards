import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'
import { loginSchema } from './login-schema'

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  console.log('errors: ', errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          labelText={'email'}
          validationError={errors.email?.message}
        />
        <TextField
          {...register('password')}
          labelText={'password'}
          validationError={errors.password?.message}
        />
        <ControlledCheckbox control={control} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
