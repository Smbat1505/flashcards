import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/table-components'
import { useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{JSON.stringify(error.data.message)}</div>
  }

  console.log(data)

  return (
    <div>
      decks
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Cards</TableHeader>
            <TableHeader>Last Updated</TableHeader>
            <TableHeader>Created by</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? (
            data.items.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.cardsCount}</TableCell>
                  <TableCell>
                    {new Date(Date.parse(item.updated)).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>
                    {new Date(Date.parse(item.created)).toLocaleDateString('ru-RU')}
                  </TableCell>
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
