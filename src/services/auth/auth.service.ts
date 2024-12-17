import { LoginArgs } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
  }),
})

export const { useLoginMutation } = authService
