import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

export const LearnDeckModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onOpenChange={setOpen}
      open={open}
      title={'Learn Deck'}
      trigger={<Button variant={'primary'}>Learn Deck</Button>}
      withCloseBtn={false}
    >
      hi
    </Modal>
  )
}
