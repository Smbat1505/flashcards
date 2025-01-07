import { signUpFormValues } from '@/components/auth/forms/signUp-form/signUp-schema'
import { Header } from '@/components/ui/header'
import { SignUp } from '@/pages/auth/signUp/signUp'
import { useSignupMutation } from '@/services/auth/auth.service'
import { SignUpRequest } from '@/services/flashcards.types'

export const SignUpPage = () => {
  const [signup] = useSignupMutation()

  const onSubmitHandler = async (data: signUpFormValues) => {
    try {
      const updatedData: SignUpRequest = {
        email: data.email,
        html: '<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn\'t work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##',
        name: 'Andrei',
        password: data.password,
        sendConfirmationEmail: false,
        subject: 'flashcards registration',
      }

      console.log(updatedData)
      await signup(updatedData)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Header isAuthenticated={false} />
      <div style={{ paddingTop: '36px' }}>
        <SignUp onSubmit={onSubmitHandler}></SignUp>
      </div>
    </>
  )
}
