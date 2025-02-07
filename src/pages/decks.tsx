import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Filter } from '@/components/layout/filter/filter'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
import { Rating } from '@/components/ui/rating'
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
import { useAuthMeQuery } from '@/services/auth/auth.service'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'
import { GetDecksQuery } from '@/services/flashcards.types'

import s from './decks.module.scss'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState<number>()
  const [itemsPerPage, setItemsPerPage] = useState<number>()
  const [sliderValues, setSliderValues] = useState<number[]>([2, 10])
  const [cardsPage, setCardsPage] = useState<string[]>()
  const [tabSwitcherValue, setTabSwitcherValue] = useState<string>('allCards')
  const [searchInputValue, setSearchInputValue] = useState<string>()

  const onClearFilterHandler = () => {
    console.log('clear filter')
    setSearchInputValue('')
    setSliderValues([2, 10])
    setTabSwitcherValue('allCards')
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
    name: searchInputValue,
  }
  const { data, isLoading } = useGetDecksQuery(getDecksQuery)
  const [deleteDeck] = useDeleteDeckMutation()

  console.log(meResponse)

  const onCurrentPageButtonClickHandler = (currentPage: number | string) => {
    setCurrentPage(Number(currentPage))
  }

  const onItemsPerPageClickHandler = (itemsPerPage: string) => {
    setItemsPerPage(Number(itemsPerPage))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const onDeckClickHandler = (id: string, name: string) => {
    console.log(id, name)
    setCardsPage([id, name])
  }

  const onSliderChangeHandler = (values: number[]) => {
    setSliderValues(values)
  }

  const onTabSwitcherChangeHandler = (value: string) => {
    console.log(value)
    setTabSwitcherValue(value)
    setCurrentPage(1)
  }

  const onInputSearchChangeHandler = (value: string) => {
    console.log(value)
    setSearchInputValue(value)
  }

  return (
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <div className={s.container}>
        <div className={s.pageHeadingWrapper}>
          <Typography variant={'h1'}>Decks list</Typography>
          <AddNewDeckModal />
        </div>
        <Filter
          inputValue={searchInputValue}
          onClearFilter={onClearFilterHandler}
          onInputSearchChange={onInputSearchChangeHandler}
          onSliderChange={onSliderChangeHandler}
          onTabSwitcherChange={onTabSwitcherChangeHandler}
          sliderValues={sliderValues}
          tabSwitcherValue={tabSwitcherValue}
        />

        <Table width={'100%'}>
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
                            onClick={() => onDeckClickHandler(item.id, item.name)}
                            src={item.cover}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
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
                    <TableCell className={s.iconsCell}>
                      <div className={s.iconsDiv}>
                        <SvgWrapper
                          SvgComponent={PlayCircleOutline}
                          onClick={() => onDeckClickHandler(item.id, item.name)}
                          size={'16'}
                          wrapper={'button'}
                        />
                        <SvgWrapper SvgComponent={Edit2Outline} size={'16'} wrapper={'button'} />
                        <SvgWrapper
                          SvgComponent={TrashOutline}
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
        <Rating value={3} />
      </div>
      {cardsPage && <Navigate state={cardsPage} to={'./cards'} />}
    </>
  )
}
