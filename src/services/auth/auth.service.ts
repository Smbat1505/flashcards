import { AuthMeResponseType, LoginArgs } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    authMe: builder.query<AuthMeResponseType, void>({
      providesTags: ['Auth'],
      query: body => ({
        body,
        url: 'v1/auth/me',
      }),
    }),
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
  }),
})

export const { useAuthMeQuery, useLoginMutation, useLogoutMutation } = authService
