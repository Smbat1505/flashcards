import { useId as generateId } from 'react'

export const useGetId = (idFromProps?: string) => idFromProps || generateId()
