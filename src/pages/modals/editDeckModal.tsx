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
import { useUpdateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addNewDeckModal.module.scss'

type PropsType = {
  cover?: string
  deckId: string
  isPrivate?: boolean
  name: string | undefined
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const EditDeckModal = ({ deckId, name, ...props }: PropsType) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<addNewDeckFormValues>({
    defaultValues: {
      isPrivate: true,
      name: name,
    },
    resolver: zodResolver(addNewDeckSchema),
  })

  console.log('errors: ', errors)
  console.log(props.cover)

  const [updateDeck] = useUpdateDeckMutation()

  const [cover, setCover] = useState<File | string>()
  const [coverURL, setCoverURL] = useState<string | undefined>(props.cover)

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCover(e.target.files?.[0])
      setCoverURL(URL.createObjectURL(e.target.files?.[0]))
    }
  }

  console.log('cover: ', cover)
  console.log('coverURL: ', coverURL)

  const onSubmit = async (data: addNewDeckFormValues) => {
    console.log(data)
    const dataWithCover = { ...data, cover, id: deckId }

    console.log(dataWithCover)

    if (isValid) {
      try {
        await updateDeck({ ...dataWithCover }).then(() =>
          console.log('deck ' + data.name + ' udpated')
        )
      } catch (e) {
        console.log(e)
      }
      props.onOpenChange(false)
      reset()
    }
  }

  const onDeleteImageHandler = () => {
    if (coverURL != null) {
      URL.revokeObjectURL(coverURL)
    }
    setCover('')
    setCoverURL(undefined)
  }

  return (
    <Modal
      onOpenChange={props.onOpenChange}
      open={props.open}
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
        {coverURL && (
          <div className={s.coverImage}>
            <img alt={name} src={coverURL} width={'170px'} />
            <button className={s.iconButton} onClick={onDeleteImageHandler}>
              <CloseCrossOutline />
            </button>
          </div>
        )}
        <Button as={'label'} fullWidth htmlFor={'addDeckCoverInput'} variant={'secondary'}>
          <Image width={'1rem'} /> {coverURL ? 'Change Image' : 'Upload Image'}
        </Button>
        <div className={s.checkBoxWrapper}>
          <ControlledCheckbox control={control} labelText={'Private Pack'} name={'isPrivate'} />
        </div>
        <div className={s.footerWrapper}>
          <div>
            <Button onClick={() => props.onOpenChange(false)} variant={'secondary'}>
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
