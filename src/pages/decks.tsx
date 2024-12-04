import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/table-components'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api'
import { GetDecksQuery } from '@/services/flashcards.types'

export const Decks = () => {
  // const { currentPage } = useParams<{ currentPage: string }>()
  const [currentPage, setCurrentPage] = useState<number>()
  const [itemsPerPage, setItemsPerPage] = useState<number>()
  const getDecksQuery: GetDecksQuery = { currentPage, itemsPerPage }

  // const [skip, setSkip] = useState(false)
  const { data, isLoading } = useGetDecksQuery(getDecksQuery)

  const onCurrentPageButtonClickHandler = (currentPage: number | string) => {
    setCurrentPage(Number(currentPage))
  }

  const onItemsPerPageClickHandler = (itemsPerPage: string) => {
    setItemsPerPage(Number(itemsPerPage))
  }

  const onSliderChangeHandler = (values: number[]) => {
    console.log(values)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <Slider maxValue={100} minValue={10} onChange={onSliderChangeHandler} value={[20, 40]} />
      </div>
      <Typography variant={'h1'}>Decks list</Typography>
      <Link to={'/decks2'}>Decks 2</Link>
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
      <Pagination
        onPageChange={onCurrentPageButtonClickHandler}
        onPerPageChange={onItemsPerPageClickHandler}
        perPageOptions={['10', '20', '30', '50', '100']}
        totalPages={data ? data.pagination.totalPages : 1}
      />
    </>
  )
}
