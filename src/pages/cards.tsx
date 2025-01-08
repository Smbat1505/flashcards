import { useLocation } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/table-components'
import { useGetDeckCardsQuery } from '@/services/base-api'

export const Cards = () => {
  const location = useLocation()

  console.log(location.state)
  const { data } = useGetDeckCardsQuery({ id: location.state })

  return (
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
              <TableRow>
                <TableCell key={item.id}>{item.question}</TableCell>
                <TableCell>{item.answer}</TableCell>
                <TableCell>{item.updated}</TableCell>
                <TableCell>{item.grade}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))
          : ''}
      </TableBody>
    </Table>
  )
}
