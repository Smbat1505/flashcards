import { LoginForm } from '@/components/auth/login-form'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const Login = () => {
  return (
    <Card>
      <Typography variant={'h1'}>Sign In</Typography>
      <LoginForm />
    </Card>
  )
}
