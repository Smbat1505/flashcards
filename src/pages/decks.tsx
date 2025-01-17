import { ChangeEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Filter } from '@/components/layout/filter/filter'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
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

import s from './decks.module.scss'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState<number>()
  const [itemsPerPage, setItemsPerPage] = useState<number>()
  const [sliderValues, setSliderValues] = useState<number[]>([2, 10])
  const [cardsPage, setCardsPage] = useState<string>()
  const [tabSwitcherValue, setTabSwitcherValue] = useState<string>()
  const [searchDeckName, setSearchDeckName] = useState<string>()

  const onClearFilterHandler = () => {
    console.log('clear filter')
    setSearchDeckName(undefined)
    setSliderValues([2, 10])
    setTabSwitcherValue(undefined)
  }

  const meResponse = useAuthMeQuery()

  let authorId

  if (tabSwitcherValue == 'myCards') {
    authorId = meResponse.data?.id
  } else {
    authorId = undefined
  }

  const getDecksQuery: GetDecksQuery = {
    authorId,
    currentPage,
    itemsPerPage,
    maxCardsCount: sliderValues[1],
    minCardsCount: sliderValues[0],
    name: searchDeckName,
  }
  const { data, isLoading } = useGetDecksQuery(getDecksQuery)

  const [createDeck] = useCreateDeckMutation()

  const [deleteDeck] = useDeleteDeckMutation()

  console.log(meResponse)

  const onCurrentPageButtonClickHandler = (currentPage: number | string) => {
    setCurrentPage(Number(currentPage))
  }

  const onItemsPerPageClickHandler = (itemsPerPage: string) => {
    setItemsPerPage(Number(itemsPerPage))
  }

  const onAddDeckSubmitHandler = async (data: addNewDeckFormValues) => {
    try {
      console.log(data)
      await createDeck(data).then(() => console.log('new deck ' + data.name + ' created'))
    } catch (e) {
      console.log(e)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const onDeckClickHandler = (id: string) => {
    console.log(id)
    setCardsPage(id)
  }

  const onSliderChangeHandler = (values: number[]) => {
    setSliderValues(values)
  }

  const onTabSwitcherChangeHandler = (value: string) => {
    console.log(value)
    setTabSwitcherValue(value)
    setCurrentPage(undefined)
  }

  const onInputSearchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    setSearchDeckName(event.currentTarget.value)
  }

  return (
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <div className={s.container}>
        <div className={s.pageHeadingWrapper}>
          <Typography variant={'h1'}>Decks list</Typography>
          <AddNewDeckModal onSubmit={onAddDeckSubmitHandler} />
        </div>
        <Filter
          defaultSliderValue={sliderValues}
          onClearFilter={onClearFilterHandler}
          onInputSearchChange={onInputSearchChangeHandler}
          onSliderChange={onSliderChangeHandler}
          onTabSwitcherChange={onTabSwitcherChangeHandler}
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
                          onClick={() => onDeckClickHandler(item.id)}
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
                        SvgComponent={TrashOutline}
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
      {cardsPage && <Navigate state={cardsPage} to={'./cards'} />}
    </>
  )
}
