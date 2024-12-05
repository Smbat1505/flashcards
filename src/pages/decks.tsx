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
  const getDecksQuery: GetDecksQuery = { currentPage, itemsPerPage, maxCardsCount, minCardsCount }

  // const [skip, setSkip] = useState(false)
  const { data, isLoading } = useGetDecksQuery(getDecksQuery)

  const [sliderValues, setSliderValues] = useState<number[]>([2, 10])

  const onCurrentPageButtonClickHandler = (currentPage: number | string) => {
    setCurrentPage(Number(currentPage))
  }

  const onItemsPerPageClickHandler = (itemsPerPage: string) => {
    setItemsPerPage(Number(itemsPerPage))
  }

  const onSliderChangeHandler = (values: number[]) => {
    console.log(values, typeof values)
    setSliderValues(values)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Typography variant={'h1'}>Decks list</Typography>
      <Link to={'/decks2'}>Decks 2</Link>
      <div>
        <Slider
          defaultValue={sliderValues}
          maxValue={15}
          minValue={0}
          onChange={onSliderChangeHandler}
        />
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
      <Pagination
        onPageChange={onCurrentPageButtonClickHandler}
        onPerPageChange={onItemsPerPageClickHandler}
        perPageOptions={['10', '20', '30', '50', '100']}
        totalPages={data ? data.pagination.totalPages : 1}
      />
    </>
  )
}
