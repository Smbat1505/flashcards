import { SignUpForm } from '@/components/auth/forms/signUp-form'
import { signUpFormValues } from '@/components/auth/forms/signUp-form/signUp-schema'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type SignUpType = {
  onSubmit: (data: signUpFormValues) => void
}

export const SignUp = ({ onSubmit }: SignUpType) => {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        <Typography variant={'h1'}>Sign Up</Typography>
      </div>
      <SignUpForm onSubmit={onSubmit} />
    </Card>
  )
}
