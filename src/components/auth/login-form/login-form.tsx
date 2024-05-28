import { useController, useForm } from 'react-hook-form'

import { CheckboxDemo } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'stupid'),
  rememberMe: z.boolean().default(true),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

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

  // const emailRegex =
  //   /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
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
      <CheckboxDemo {...register('rememberMe')} defaultChecked={value} onChange={onChange}>
        remember me
      </CheckboxDemo>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
