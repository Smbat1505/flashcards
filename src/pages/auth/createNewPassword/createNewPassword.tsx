import { ReactElement } from 'react'

import { AuthPasswordForm } from '@/components/auth/forms/passwordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/pages/auth/authPage.module.scss'

/**
 * Renders the CreateNewPassword component which allows users to create a new password.
 *
 * @return {ReactElement} The rendered CreateNewPassword component.
 */

export const CreateNewPassword = (): ReactElement => {
  return (
    <Card className={s.form}>
      <Typography className={s.form__title} variant={'h1'}>
        Create new password
      </Typography>
      <AuthPasswordForm
        formButtonTitle={'Create new password'}
        formInstructions={"Create new password and we'll send you further instructions to email"}
        label={'Password'}
        name={'password'}
        onSubmit={() => {}}
        placeholder={'type your new password'}
        type={'password'}
      />
    </Card>
  )
}
