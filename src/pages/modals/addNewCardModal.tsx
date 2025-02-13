import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { addNewCardFormValues, addNewCardSchema } from '@/pages/modals/addNewCardModal-schema'
import { useCreateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addNewCardModal.module.scss'

export const AddNewCardModal = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<addNewCardFormValues>({
    defaultValues: {
      answer: '',
      question: '',
    },
    resolver: zodResolver(addNewCardSchema),
  })

  console.log('errors: ', errors)

  // const [createDeck] = useCreateDeckMutation()

  const [cover, setCover] = useState<File | null>(null)

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.target.files?.[0] ?? null)
    console.log(cover)
  }

  const onSubmit = async (data: addNewCardFormValues) => {
    console.log(data)
    const dataWithCover = { ...data, cover }

    console.log(dataWithCover)

    //   if (isValid) {
    //     try {
    //       await createDeck(dataWithCover).then(() =>
    //         console.log('new deck ' + data.name + ' created')
    //       )
    //     } catch (e) {
    //       console.log(e)
    //     }
    //     setOpen(false)
    //     reset()
    //   }
  }

  const [open, setOpen] = useState(false)

  return (
    <Modal
      isValid={isValid}
      onOpenChange={setOpen}
      open={open}
      // reset={reset}
      title={'Add New Card'}
      trigger={<Button variant={'primary'}>Add New Card</Button>}
    >
      <form onSubmit={event => event.preventDefault()}>
        <Typography className={s.question} variant={'subtitle2'}>
          Question:
        </Typography>
        <div className={s.emailField}>
          <ControlledTextField
            control={control}
            defaultValue={''}
            labelText={'Question?'}
            name={'question'}
            placeholder={'Name'}
          />
        </div>
        <div>
          <input
            id={'addCardQuestionImage'}
            onChange={onFileChange}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
        <Button as={'label'} fullWidth htmlFor={'addCardQuestionImage'} variant={'secondary'}>
          <Image width={'1rem'} /> Upload Image
        </Button>
        <div className={s.footerWrapper}>
          <div>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              Cancel
            </Button>
          </div>
          <div>
            <Button onClick={handleSubmit(onSubmit)} variant={'primary'}>
              Add New Deck
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
