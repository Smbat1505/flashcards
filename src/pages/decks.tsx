import { useState } from 'react'

import { Edit2Outline, PlayCircleOutline, Trash } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Header } from '@/components/ui/header'
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
import { AddNewDeckModal } from '@/pages/modals/addNewDeckModal'
import { addNewDeckFormValues } from '@/pages/modals/addNewDecksModal-schema'
import { useAuthMeQuery } from '@/services/auth/auth.service'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'
import { GetDecksQuery } from '@/services/flashcards.types'

export const Decks = () => {
  // const { currentPage } = useParams<{ currentPage: string }>()
  const [currentPage, setCurrentPage] = useState<number>()
  const [itemsPerPage, setItemsPerPage] = useState<number>()
  const [sliderValues, setSliderValues] = useState<number[]>([2, 10])
  const getDecksQuery: GetDecksQuery = {
    currentPage,
    itemsPerPage,
    maxCardsCount: sliderValues[1],
    minCardsCount: sliderValues[0],
  }

  const { data, isLoading } = useGetDecksQuery(getDecksQuery)

  const [createDeck] = useCreateDeckMutation()

  const [deleteDeck] = useDeleteDeckMutation()

  const meResponse = useAuthMeQuery()

  console.log(meResponse)

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

  const onAddDeckSubmitHandler = async (data: addNewDeckFormValues) => {
    try {
      console.log(data)
      await createDeck(data)
    } catch (e) {
      console.log(e)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <Typography variant={'h1'}>Decks list</Typography>

      <AddNewDeckModal onSubmit={onAddDeckSubmitHandler} />

      <div style={{ margin: '20px' }}>
        <Typography variant={'body2'}>Number of cards</Typography>
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
            <TableHeader align={'left'}>Name</TableHeader>
            <TableHeader align={'left'}>Cards</TableHeader>
            <TableHeader align={'left'}>Last Updated</TableHeader>
            <TableHeader align={'left'}>Created by</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? (
            data.items.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                      {item.cover ? (
                        <img
                          alt={item.name}
                          src={item.cover}
                          style={{ marginRight: '10px' }}
                          width={'118px'}
                        />
                      ) : (
                        ''
                      )}
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell>{item.cardsCount}</TableCell>
                  <TableCell>
                    {new Date(Date.parse(item.updated)).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>{item.author.name}</TableCell>
                  <TableCell>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', width: '68px' }}
                    >
                      <SvgWrapper
                        SvgComponent={PlayCircleOutline}
                        // color={'white'}
                        size={'16'}
                        wrapper={'button'}
                      />
                      <SvgWrapper
                        SvgComponent={Edit2Outline}
                        // color={'white'}
                        size={'16'}
                        wrapper={'button'}
                      />
                      <SvgWrapper
                        SvgComponent={Trash}
                        color={'white'}
                        onClick={() => deleteDeck(item.id)}
                        size={'16'}
                        wrapper={'button'}
                      />
                    </div>
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
      <Pagination
        onPageChange={onCurrentPageButtonClickHandler}
        onPerPageChange={onItemsPerPageClickHandler}
        perPageOptions={['10', '20', '30', '50', '100']}
        totalPages={data ? data.pagination.totalPages : 1}
      />
    </>
  )
}
