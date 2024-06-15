import { ReactElement } from 'react'

// import { ROUTES } from '@/common/enams/routes'
import { AuthPasswordForm } from '@/components/auth/forms/passwordForm'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/pages/auth/authPage.module.scss'

/**
 * Renders the ResetPassword component which displays a form for resetting the user's password.
 *
 * @return {ReactElement} The rendered ResetPassword component.
 */
export const ResetPassword = (): ReactElement => {
  return (
    <Card className={s.form}>
      <Typography className={s.form__title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <AuthPasswordForm
        formButtonTitle={'Send Instructions'}
        formInstructions={"Enter your email address and we'll send you further instructions"}
        label={'Email'}
        name={'email'}
        onSubmit={() => {}}
        placeholder={'type your email'}
        type={'email'}
      />
      <Typography className={s.form__questionTitle} variant={'body2'}>
        Did you remember your password?
      </Typography>

      <Typography as={'a'} className={s.form__loginLink} href={'ROUTES.SIGN_IN'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
