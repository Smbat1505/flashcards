import { useController } from 'react-hook-form'

import { CheckboxDemo, CheckboxPropsType } from '@/components/ui/checkbox'

type Props = {
  control: any
  name: string
} & CheckboxPropsType

export const ControlledCheckbox = ({ control, name, onValueChange, ...rest }: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: undefined,
    name,
    rules: undefined,
  })

  return (
    <CheckboxDemo {...rest} defaultChecked={value} onValueChange={onChange}>
      {name}
    </CheckboxDemo>
  )
}
