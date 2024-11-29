import { GetDecksResponse } from '@/services/flashcards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, string>({
        query: () => {
          return {
            params: {
              currentPage: 3,
            },
            url: 'v1/decks',
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
})
export const { useGetDecksQuery } = baseApi
