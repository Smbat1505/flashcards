export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}
export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
