import { useId as generateId } from 'react'
/**
 * Returns an ID from props if provided, otherwise generates a new ID.
 *
 * @param {string} idFromProps - Optional ID from props.
 * @return {string} The ID to be used.
 */
export const useGetId = (idFromProps?: string): string => idFromProps || generateId()
