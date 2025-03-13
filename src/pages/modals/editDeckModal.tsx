import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/components'
import CloseCrossOutline from '@/assets/icons/components/Close'
import Edit2Outline from '@/assets/icons/components/Edit2Outline'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { addNewDeckFormValues, addNewDeckSchema } from '@/pages/modals/addNewDecksModal-schema'
import { useCreateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addNewDeckModal.module.scss'

type PropsType = {
  cover?: string
  deckId: string
  isPrivate?: boolean
  name: string
}

export const EditDeckModal = ({ name, ...props }: PropsType) => {
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

  let coverURL: string | undefined = props.cover

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

  const onDeleteImageHandler = () => {
    if (coverURL != null) {
      URL.revokeObjectURL(coverURL)
    }
    setCover(undefined)
  }

  return (
    <Modal
      onOpenChange={setOpen}
      open={open}
      title={`Edit Deck`}
      trigger={<SvgWrapper SvgComponent={Edit2Outline} size={'16'} wrapper={'button'} />}
    >
      <form onSubmit={event => event.preventDefault()}>
        <ControlledTextField
          control={control}
          defaultValue={name}
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
        {props.cover && (
          <div className={s.coverImage}>
            <img src={coverURL} width={'170px'} />
            <button className={s.iconButton} onClick={onDeleteImageHandler}>
              <CloseCrossOutline />
            </button>
          </div>
        )}

        {/*<div className={s.coverImage}>*/}
        {/*  <img src={coverURL} width={'170px'} />*/}
        {/*  <button className={s.iconButton} onClick={onDeleteImageHandler}>*/}
        {/*    <CloseCrossOutline />*/}
        {/*  </button>*/}
        {/*</div>*/}

        <Button as={'label'} fullWidth htmlFor={'addDeckCoverInput'} variant={'secondary'}>
          <Image width={'1rem'} /> {props.cover ? 'Change Image' : 'Upload Image'}
        </Button>
        <div className={s.checkBoxWrapper}>
          <ControlledCheckbox control={control} labelText={'Private Pack'} name={'isPrivate'} />
        </div>
        <div className={s.footerWrapper}>
          <div>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              Cancel
            </Button>
          </div>
          <div>
            <Button onClick={handleSubmit(onSubmit)} variant={'primary'}>
              Update Deck
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
