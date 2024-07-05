import { ReactElement } from 'react'

import { FormTextField } from '@/components/auth/controllers/formTextField/formTextField'
import { FormState, useAuthForm } from '@/components/auth/forms/passwordForm/hook'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'

import styles from '@/components/auth/forms/passwordForm/authPasswordForm.module.scss'

export const AuthPasswordForm = (props: UniversalFormProps): ReactElement => {
  const {
    autoComplete = 'on',
    formButtonTitle,
    formInstructions,
    label,
    name,
    onSubmit,
    placeholder,
    type = 'text',
  } = props
  const { control, handleSubmit } = useAuthForm()

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}

      <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          aria-label={label}
          autoComplete={autoComplete}
          className={styles.formTextField}
          control={control}
          labelText={label}
          name={name}
          onInput={e => (e.currentTarget as HTMLInputElement).setCustomValidity('')}
          onInvalid={e => e.preventDefault()}
          placeholder={placeholder}
          type={type}
        />
        <Typography className={styles.formInstructions} variant={'body1'}>
          {formInstructions}
        </Typography>
        <Button className={styles.formButton} fullWidth type={'submit'}>
          {formButtonTitle}
        </Button>
      </form>
    </>
  )
}

type Input = 'email' | 'password'

export interface UniversalFormProps {
  autoComplete?: 'off' | 'on'
  formButtonTitle: string
  formInstructions?: string
  label?: string
  name: Input
  onSubmit: (data: FormState) => void
  placeholder?: string
  type: Input
}
