export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type AuthMeResponseType = {
  avatar?: string | undefined
  created: string
  email: string
  id: string
  isEmailVerified: true
  name: string
  updated: string
}
