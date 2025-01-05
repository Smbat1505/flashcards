import { signUpFormValues } from '@/components/auth/forms/signUp-form/signUp-schema'
import { SignUp } from '@/pages/auth/signUp/signUp'

export const SignUpPage = () => {
  const onSubmitHandler = (data: signUpFormValues) => {
    console.log(data)
  }

  return <SignUp onSubmit={onSubmitHandler}></SignUp>
}
