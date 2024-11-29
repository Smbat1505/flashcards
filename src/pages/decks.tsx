import { useState } from 'react'
import { useParams } from 'react-router-dom'

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
  const { currentPage } = useParams<{ currentPage: string }>()
  const [skip, setSkip] = useState(false)
  const { data, error, isLoading } = useGetDecksQuery(currentPage ?? '', { skip })

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
                  <TableCell>{item.author.name}</TableCell>
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
