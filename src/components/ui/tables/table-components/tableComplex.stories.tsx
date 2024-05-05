import { FC } from 'react'

import { Edit2Outline, PlayCircleOutline, Trash } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableCell, TableHead, TableRow } from './index'

interface Deck {
  cardsCount: number
  created: string
  id: string
  name: string
  updated: string
}

interface DecksTableProps {
  decks: Deck[]
}

const deckData = [
  {
    cardsCount: 10,
    created: 'William Barrett',
    id: '1',
    name: 'Anguilla',
    updated: 'Wednesday, 31 July 2024',
  },
  {
    cardsCount: 3,
    created: 'George McDaniel',
    id: '2',
    name: 'Guinea',
    updated: 'Monday, 15 April 2024',
  },
  {
    cardsCount: 1,
    created: 'Thomas Gordon',
    id: '3',
    name: 'Poland',
    updated: 'Tuesday, 23 April 2024',
  },
  {
    cardsCount: 8,
    created: 'Chad Palmer',
    id: '4',
    name: 'Palau',
    updated: 'Monday, 20 May 2024',
  },
]

const ExampleTable: FC<DecksTableProps> = ({ decks }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Cards</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Created By</TableCell>
          <TableCell>options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {decks.map(deck => {
          return (
            <TableRow key={deck.id}>
              <TableCell>{deck.name}</TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>{deck.created}</TableCell>
              <TableCell>
                <SvgWrapper
                  SvgComponent={Trash}
                  color={'blue'}
                  size={'1.25rem'}
                  wrapper={'button'}
                />
                <SvgWrapper
                  SvgComponent={Edit2Outline}
                  color={'blue'}
                  size={'1.25rem'}
                  wrapper={'button'}
                />
                <SvgWrapper
                  SvgComponent={PlayCircleOutline}
                  color={'blue'}
                  size={'1.25rem'}
                  wrapper={'button'}
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
const meta: Meta<typeof ExampleTable> = {
  component: ExampleTable,
  parameters: {
    category: 'stories',
    component: 'ExampleTable',
  },
  tags: ['autodocs'],
  title: 'Tables/ExampleTable',
} satisfies Meta<typeof ExampleTable>

export default meta
type Story = StoryObj<typeof meta>

export const ExampleDecksTable: Story = {
  args: {},
  render: () => {
    return <ExampleTable decks={deckData} />
  },
}
