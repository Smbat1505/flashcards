import { useLocation } from 'react-router-dom'

import { Edit2Outline, TrashOutline } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Rating } from '@/components/ui/rating'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/table-components'
import { useGetDeckCardsQuery } from '@/services/base-api'

import s from './cards.module.scss'

export const Cards = () => {
  const location = useLocation()

  console.log(location.state)
  const { data } = useGetDeckCardsQuery({ id: location.state[0] })

  console.log(data)

  return (
    <>
      <div>{location.state[1]}</div>
      <Table>
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
    </>
  )
}
