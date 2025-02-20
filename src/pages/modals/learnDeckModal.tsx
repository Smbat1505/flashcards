import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { GetDeckCardsItems } from '@/services/flashcards.types'

import s from './learnDeckModal.module.scss'

type PropsType = {
  data: Array<GetDeckCardsItems>
  deckName: string
}

export const LearnDeckModal = ({ data, deckName }: PropsType) => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onOpenChange={setOpen}
      open={open}
      trigger={<Button variant={'primary'}>Learn Deck</Button>}
    >
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Learn &quot;{deckName}&quot;
      </Typography>
      <Typography variant={'subtitle1'}>Question: {data[0].question}</Typography>
    </Modal>
  )
}
