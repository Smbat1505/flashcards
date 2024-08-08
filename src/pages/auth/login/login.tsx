import { LoginForm } from '@/components/auth/login-form'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const Login = () => {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        <Typography variant={'h1'}>Sign In</Typography>
      </div>
      <LoginForm />
    </Card>
  )
}
