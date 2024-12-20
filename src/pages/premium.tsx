import { useAuthMeQuery } from '@/services/auth/auth.service'

export const Premium = () => {
  const MeResponse = useAuthMeQuery()

  console.log(MeResponse.data?.name)

  return <div>This is premium content</div>
}
