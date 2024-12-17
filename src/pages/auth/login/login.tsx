import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/auth/login-form'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

export const Login = () => {
  const navigate = useNavigate()

  const onSubmitHandler = async (data: LoginArgs) => {
    try {
      console.log(data)
      await login(data)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const [login] = useLoginMutation()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Card>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
          <Typography variant={'h1'}>Sign In</Typography>
        </div>
        <LoginForm onSubmit={onSubmitHandler} />
      </Card>
    </div>
  )
}
