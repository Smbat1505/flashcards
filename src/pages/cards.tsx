import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Edit2, Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons/components'
import ArrowBackOutline from '@/assets/icons/components/ArrowBackOutline'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { DropDownMenu, dropDownMenuList } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
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
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewCardModal } from '@/pages/modals/addNewCardModal'
import { useAuthMeQuery } from '@/services/auth/auth.service'
import { useGetDeckCardsQuery } from '@/services/base-api'

import s from './cards.module.scss'

export const Cards = () => {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState<number>()
  const [itemsPerPage, setItemsPerPage] = useState<number>()
  const [searchInputValue, setSearchInputValue] = useState<string>()

  console.log(location.state)
  const { data, isLoading } = useGetDeckCardsQuery({
    currentPage,
    id: location.state.id,
    itemsPerPage,
    orderBy: null,
    question: searchInputValue,
  })

  console.log(data)

  const meResponse = useAuthMeQuery()

  const options: dropDownMenuList[] = [
    { icon: <PlayCircleOutline height={'16'} width={'16'} />, redirect: '#', title: 'Learn' },
    { icon: <Edit2 height={'16'} width={'16'} />, redirect: '#', title: 'Edit' },
    { icon: <TrashOutline height={'16'} width={'16'} />, redirect: '#', title: 'Delete' },
  ]

  console.log(searchInputValue)

  const onCurrentPageButtonClickHandler = (currentPage: number | string) => {
    setCurrentPage(Number(currentPage))
  }

  const onItemsPerPageClickHandler = (itemsPerPage: string) => {
    setItemsPerPage(Number(itemsPerPage))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <div className={s.container}>
        <div className={s.backLinkTxtWrapper}>
          <SvgWrapper
            SvgComponent={ArrowBackOutline}
            color={'white'}
            size={'16'}
            wrapperClassName={s.arrowSpan}
          />
          <div>
            <Typography as={'a'} className={s.backLinkTxt} href={'../'} variant={'body2'}>
              Back to Decks List
            </Typography>
          </div>
        </div>
        <div className={s.pageHeadingWrapper}>
          <div className={s.titleWithMenuWrapper}>
            <Typography as={'h1'} variant={'h1'}>
              {location.state.name}
            </Typography>
            <div className={s.menuIconWrapper}>
              <DropDownMenu>
                <DropDownList options={options} />
              </DropDownMenu>
            </div>
          </div>
          <AddNewCardModal />
        </div>
        {location.state.cover ? (
          <img alt={location.state.name} src={location.state.cover} width={'170px'} />
        ) : (
          ''
        )}
        <TextField
          handleValueChange={setSearchInputValue}
          placeholder={'Input search'}
          type={'search'}
          value={searchInputValue}
          wrapperProps={{ className: s.searchInputWrapper }}
        />
        <Table width={'100%'}>
          <TableHead>
            <TableRow>
              <TableHeader>Question</TableHeader>
              <TableHeader>Answer</TableHeader>
              <TableHeader>Last Updated</TableHeader>
              <TableHeader>Grade</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.items.map(item => (
                  <TableRow key={item.id}>
                    <TableCell key={item.id}>{item.question}</TableCell>
                    <TableCell>{item.answer}</TableCell>
                    <TableCell>
                      {new Date(Date.parse(item.updated)).toLocaleDateString('ru-RU')}
                    </TableCell>
                    <TableCell>
                      <Rating value={item.grade} />
                    </TableCell>
                    <TableCell className={s.iconsCell}>
                      <div className={s.iconsDiv}>
                        <SvgWrapper SvgComponent={Edit2Outline} size={'16'} wrapper={'button'} />
                        <SvgWrapper SvgComponent={TrashOutline} size={'16'} wrapper={'button'} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : ''}
          </TableBody>
        </Table>
        <Pagination
          onPageChange={onCurrentPageButtonClickHandler}
          onPerPageChange={onItemsPerPageClickHandler}
          perPageOptions={['10', '20', '30', '50', '100']}
          totalPages={data ? data.pagination.totalPages : 1}
        />
      </div>
    </>
  )
}
