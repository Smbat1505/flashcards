import { useLocation } from 'react-router-dom'

import { Edit2Outline, TrashOutline } from '@/assets/icons/components'
import ArrowBackOutline from '@/assets/icons/components/ArrowBackOutline'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Header } from '@/components/ui/header'
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
import { useAuthMeQuery } from '@/services/auth/auth.service'
import { useGetDeckCardsQuery } from '@/services/base-api'

import s from './cards.module.scss'

export const Cards = () => {
  const location = useLocation()

  console.log(location.state)
  const { data } = useGetDeckCardsQuery({ id: location.state[0] })

  console.log(data)

  const meResponse = useAuthMeQuery()

  return (
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <div className={s.container}>
        <div className={s.backArrowDivWrapper}>
          <Typography as={'a'} className={s.backLinkTxt} href={'../'} variant={'body2'}>
            <SvgWrapper
              SvgComponent={ArrowBackOutline}
              color={'white'}
              size={'16'}
              wrapperClassName={s.arrowSpan}
            />
            <div className={s.backLinkTxt1}>Back to Decks List</div>
          </Typography>
        </div>
        <div>{location.state[1]}</div>
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
      </div>
    </>
  )
}
