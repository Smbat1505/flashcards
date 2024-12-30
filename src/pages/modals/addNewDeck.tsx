import { useForm } from 'react-hook-form'

import { FormValues } from '@/components/auth/login-form'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { addNewDeckFormValues, addNewDeckSchema } from '@/pages/modals/addNewDecks-schema'
import { useCreateDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/auth/login-form/login-form.module.scss'

export const addNewDeckModal = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<addNewDeckFormValues>({
    defaultValues: {
      name: '',
      privatePack: true,
    },
    resolver: zodResolver(addNewDeckSchema),
  })

  console.log('errors: ', errors)

  const [createDeck] = useCreateDeckMutation()

  const addNewDeckFooterButtons = {
    buttonPrimary: (
      <Button onClick={() => createDeck({ name: 'afaf' })} type={'submit'} variant={'primary'}>
        Add New Deck
      </Button>
    ),
    buttonSecondary: <Button variant={'secondary'}>Cancel</Button>,
  }

  return (
    <Modal
      footer={addNewDeckFooterButtons}
      title={'Add New Deck'}
      trigger={<Button variant={'primary'}>Add New Deck</Button>}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.emailField}>
          <ControlledTextField control={control} labelText={'Name Pack'} name={'name'} />
        </div>
        <ControlledCheckbox control={control} labelText={'Remember Me'} name={'privatePack'} />
      </form>
    </Modal>
  )
}
