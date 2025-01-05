import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { LoginArgs } from '@/services/auth/auth.types'

import { LoginForm } from '../../../components/auth/forms/login-form'

type LoginType = {
  onSubmit: (data: LoginArgs) => void
}

export const Login = (props: LoginType) => {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        <Typography variant={'h1'}>Sign In</Typography>
      </div>
      <LoginForm onSubmit={props.onSubmit} />
    </Card>
  )
}
