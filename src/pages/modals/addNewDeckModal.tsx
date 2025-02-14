import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/components'
import CloseCrossOutline from '@/assets/icons/components/Close'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { addNewDeckFormValues, addNewDeckSchema } from '@/pages/modals/addNewDecksModal-schema'
import { useCreateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addNewDeckModal.module.scss'

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

  const [cover, setCover] = useState<File>()
  const [open, setOpen] = useState(false)

  let coverURL: string = ''

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCover(e.target.files?.[0])
    }
  }

  if (cover) {
    coverURL = URL.createObjectURL(cover)
  }

  console.log('cover: ', cover)

  console.log('coverURL: ', coverURL)

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

  const renderAttachedFilePreview = () => {
    return (
      <div className={s.coverImage}>
        <img src={coverURL} width={'170px'} />
      </div>
    )
  }

  const onDeleteImageHandler = () => {
    URL.revokeObjectURL(coverURL)
    setCover(undefined)
  }

  return (
    <Modal
      isValid={isValid}
      onOpenChange={setOpen}
      open={open}
      reset={reset}
      title={'Add New Deck'}
      trigger={<Button variant={'primary'}>Add New Deck</Button>}
    >
      <form onSubmit={event => event.preventDefault()}>
        <ControlledTextField
          control={control}
          defaultValue={''}
          labelText={'Name Pack'}
          name={'name'}
          wrapperProps={{ className: s.txtFieldWrapper }}
        />
        <div>
          <input
            id={'addDeckCoverInput'}
            onChange={onFileChange}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
        <div>{cover && renderAttachedFilePreview()}</div>
        <button className={s.iconButton} onClick={onDeleteImageHandler}>
          <CloseCrossOutline />
        </button>
        <Button as={'label'} fullWidth htmlFor={'addDeckCoverInput'} variant={'secondary'}>
          <Image width={'1rem'} /> {cover ? 'Edit Image' : 'Upload Image'}
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
