import { useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const query = useGetDecksQuery()

  console.log(query)

  return <div>decks</div>
}
