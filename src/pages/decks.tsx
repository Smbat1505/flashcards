import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/table-components'
import { useGetDecksQuery } from '@/services/base-api'
import { GetDecksQuery } from '@/services/flashcards.types'

export const Decks = () => {
  // const { currentPage } = useParams<{ currentPage: string }>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(5)
  const getDecksQuery: GetDecksQuery = { currentPage, itemsPerPage }

  // const [skip, setSkip] = useState(false)
  const { data, isLoading } = useGetDecksQuery(getDecksQuery)

  const onCurrentPageButtonClickHandler = (currentPage: number) => {
    setCurrentPage(currentPage)
  }

  const onItemsPerPageClickHandler = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  // if (error) {
  //   return <div>{JSON.stringify(error.data.message)}</div>
  // }

  // console.log(data)

  return (
    <>
      decks
      <Link to={'/decks2'}>Decks 2</Link>
      <Button onClick={() => onCurrentPageButtonClickHandler(1)}>currentPage 1</Button>
      <Button onClick={() => onCurrentPageButtonClickHandler(2)}>currentPage 2</Button>
      <Button onClick={() => onCurrentPageButtonClickHandler(3)}>currentPage 3</Button>
      <div>
        <Button onClick={() => onItemsPerPageClickHandler(5)}>itemsPerPage 5</Button>
        <Button onClick={() => onItemsPerPageClickHandler(10)}>itemsPerPage 10</Button>
        <Button onClick={() => onItemsPerPageClickHandler(15)}>itemsPerPage 15</Button>
      </div>
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
    </>
  )
}
