import { AuthMeResponseType, LoginArgs } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    authMe: builder.query<AuthMeResponseType, void>({
      query: body => ({
        body,
        url: 'v1/auth/me',
      }),
    }),
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
  }),
})

export const { useAuthMeQuery, useLoginMutation } = authService
