import { GetDecksQuery, GetDecksResponse } from '@/services/flashcards.types'
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
      getDecks: builder.query<GetDecksResponse, GetDecksQuery | void>({
        query: getDecksQuery => {
          return {
            params: {
              currentPage: getDecksQuery?.currentPage,
              itemsPerPage: getDecksQuery?.itemsPerPage,
              maxCardsCount: 3,
              minCardsCount: 1,
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
