import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

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
        <div className={s.emailField}>
          <TextField
            {...register('email')}
            labelText={'Email'}
            validationError={errors.email?.message}
          />
        </div>
        <TextField
          {...register('password')}
          labelText={'Password'}
          type={'password'}
          validationError={errors.password?.message}
        />
        <div className={s.checkBoxField}>
          <ControlledCheckbox control={control} labelText={'Remember Me'} name={'rememberMe'} />
        </div>
        <div className={s.forgotPasswWrapper}>
          <Typography as={'a'} className={s.forgotPasswTxt} href={'#'} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          Sign In
        </Button>
        <Typography
          className={s.dontHaveAccountTxt}
          color={'var(--color-light-900'}
          variant={'body2'}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Typography
          as={'a'}
          className={s.signUpLink}
          color={'var(--color-accent-500'}
          href={'#'}
          variant={'subtitle1'}
        >
          Sign Up
        </Typography>
      </form>
    </>
  )
}
