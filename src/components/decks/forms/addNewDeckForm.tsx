import { CheckboxDemo } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'

export const AddNewDeckForm = () => {
  return (
    <>
      <TextField
        labelText={'Name Pack'}
        onChange={() => {}}
        onClear={() => {}}
        placeholder={'Name'}
        type={'text'}
        validationError={'validation error'}
      />
      <CheckboxDemo defaultChecked onBlur={() => {}} onFocus={() => {}} onValueChange={() => {}}>
        Private pack
      </CheckboxDemo>
    </>
  )
}
