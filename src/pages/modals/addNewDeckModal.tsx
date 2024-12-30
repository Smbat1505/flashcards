import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { addNewDeckFormValues, addNewDeckSchema } from '@/pages/modals/addNewDecksModal-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/auth/login-form/login-form.module.scss'

export const AddNewDeckModal = ({ onSubmit }: { onSubmit: (data: addNewDeckFormValues) => void }) => {
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


  const addNewDeckFooterButtons = {
    buttonPrimary: (
      <Button type={'submit'} variant={'primary'}>
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
        <ControlledCheckbox control={control} labelText={'Private Pack'} name={'privatePack'} />
        <Button type={'submit'} variant={'primary'}>
          Add New Deck
        </Button>
      </form>
    </Modal>
  )
}
