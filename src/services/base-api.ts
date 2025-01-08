import {
  CreateDeck,
  GetDeckCardsQuery,
  GetDecksQuery,
  GetDecksResponse,
} from '@/services/flashcards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    // prepareHeaders: headers => {
    //   headers.append('x-auth-skip', 'true')
    // },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeck>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: 'v1/decks',
          }
        },
      }),
      deleteDeck: builder.mutation<void, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckCards: builder.query<void, GetDeckCardsQuery>({
        providesTags: ['Cards'],
        query: getDeckCardsQuery => {
          return {
            params: {
              answer: getDeckCardsQuery.answer,
              currentPage: getDeckCardsQuery?.currentPage,
              itemsPerPage: getDeckCardsQuery?.itemsPerPage,
              orderBy: getDeckCardsQuery?.currentPage,
              question: getDeckCardsQuery?.question,
            },
            url: `v1/decks/${getDeckCardsQuery.id}/cards`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksQuery | void>({
        providesTags: ['Decks'],
        query: getDecksQuery => {
          return {
            params: {
              currentPage: getDecksQuery?.currentPage,
              itemsPerPage: getDecksQuery?.itemsPerPage,
              maxCardsCount: getDecksQuery?.maxCardsCount,
              minCardsCount: getDecksQuery?.minCardsCount,
            },
            url: 'v1/decks',
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Auth', 'Cards'],
})
export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckCardsQuery,
  useGetDecksQuery,
} = baseApi
