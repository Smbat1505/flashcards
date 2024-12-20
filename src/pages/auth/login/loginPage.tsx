import { Navigate, useNavigate } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { Login } from '@/pages/auth/login/login'
import { useAuthMeQuery, useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

export const LoginPage = () => {
  const onSubmitHandler = async (data: LoginArgs) => {
    try {
      console.log(data)
      await login(data)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const navigate = useNavigate()

  const { data, isError, isSuccess } = useAuthMeQuery()

  console.log(data)

  console.log(isError)

  console.log(isSuccess)

  const [login] = useLoginMutation()

  return (
    <>
      {isSuccess ? <Navigate to={'/'}></Navigate> : ''}
      <Header showAvatar={false} />
      <div style={{ paddingTop: '36px' }}>
        <Login onSubmit={onSubmitHandler}></Login>
      </div>
    </>
  )
}
