import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { addNewDeckFormValues, addNewDeckSchema } from '@/pages/modals/addNewDecksModal-schema'
import { useCreateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/auth/forms/login-form/login-form.module.scss'

export const AddNewDeckModal = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<addNewDeckFormValues>({
    defaultValues: {
      isPrivate: true,
      name: '',
    },
    resolver: zodResolver(addNewDeckSchema),
  })

  console.log('errors: ', errors)

  const [createDeck] = useCreateDeckMutation()

  const [cover, setCover] = useState<File | null>(null)

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.target.files?.[0] ?? null)
    console.log(cover)
  }

  const onSubmit = async (data: addNewDeckFormValues) => {
    console.log(data)
    const dataWithCover = { ...data, cover }

    console.log(dataWithCover)

    if (isValid) {
      try {
        await createDeck(dataWithCover).then(() =>
          console.log('new deck ' + data.name + ' created')
        )
      } catch (e) {
        console.log(e)
      }
      setOpen(false)
      reset()
    }
  }
  // const addNewDeckFooterButtons = {
  //   buttonPrimary: (
  //     <Button type={'submit'} variant={'primary'} onClick={
  //       if (isValid) {setOpen(false)}
  //     }>
  //       Add New Deck
  //     </Button>
  //   ),
  //   buttonSecondary: <Button variant={'secondary'}>Cancel</Button>,
  // }

  const [open, setOpen] = useState(false)

  return (
    <Modal
      // footer={addNewDeckFooterButtons}
      isValid={isValid}
      onOpenChange={setOpen}
      open={open}
      // onSubmit={handleSubmit(onSubmit)}
      reset={reset}
      title={'Add New Deck'}
      trigger={<Button variant={'primary'}>Add New Deck</Button>}
    >
      <form onSubmit={event => event.preventDefault()}>
        <div className={s.emailField}>
          <ControlledTextField
            control={control}
            defaultValue={''}
            labelText={'Name Pack'}
            name={'name'}
          />
        </div>
        <div>
          <input
            id={'addDeckCoverInput'}
            onChange={onFileChange}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
        <Button as={'label'} fullWidth htmlFor={'addDeckCoverInput'} variant={'secondary'}>
          <Image width={'1rem'} /> Upload Image
        </Button>
        <ControlledCheckbox control={control} labelText={'Private Pack'} name={'isPrivate'} />
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
