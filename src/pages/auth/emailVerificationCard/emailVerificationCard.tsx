import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

import { CheckEmail_Icon } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { ROUTES } from '@/common/enams/routes'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/pages/auth/authPage.module.scss'

/**
 * Renders an email verification card component.
 *
 * @return {ReactElement} The rendered email verification card component.
 */
export const EmailVerificationCard = (): ReactElement => {
  const { email } = useParams<{ email: string }>()

  return (
    <Card className={s.form}>
      <Typography className={s.form__title} variant={'h1'}>
        Check email
      </Typography>
      <SvgWrapper
        SvgComponent={CheckEmail_Icon}
        size={96}
        wrapper={'span'}
        wrapperClassName={s.form__icon}
      />
      <Typography className={s.form__subtitle} variant={'body2'}>
        We&apos;ve sent you an email with instructions to {email} 1cor13a8@mail.com
      </Typography>
      <Button as={'a'} className={s.form__verifyBtn} fullWidth href={ROUTES.SIGN_IN}>
        Back to Sign In
      </Button>
    </Card>
  )
}
