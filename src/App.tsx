import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Pagination } from '@/components/ui/pagination'
import { SelectItem, SelectNew } from '@/components/ui/select/select'

const onChangeHandler = (value: string) => {
  console.log(value)
}

type optionsType = {
  value: string,
  label: string
}


const options:Array<optionsType>  =

[
  {
    value: 'apple',
    label: 'Apple'
  },
  {
    value: 'blueberry',
    label: 'Blueberry'
  },
  {
    value: 'grapes',
    label: 'Grapes'
  },

]

export function App() {
  return (
    <div
      style={{
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        border: '2px solid green',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'flex-start',
        padding: '50px',
      }}
    >
      <Button>Primary Button</Button>
      <Button
        as={'a'}
        fullWidth={false}
        href={'https://my.beltelecom.by/login'}
        onClick={() => console.log('clicked')}
      >
        Primary Button As a
      </Button>
      <Button onClick={() => console.log('clicked')} showIcon>
        Primary Button with Icon
      </Button>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button showIcon variant={'secondary'}>
        Secondary Button with Icon
      </Button>
      <Button fullWidth variant={'secondary'}>
        Secondary Button with Icon
      </Button>
      <CheckboxDemo
        defaultChecked
        onChange={a => {
          console.log(a)
        }}
      />
      <CheckboxDemo />
      <CheckboxDemo defaultChecked>Check-box</CheckboxDemo>
      <CheckboxDemo>Check-box</CheckboxDemo>
      <CheckboxDemo disabled>Check-box</CheckboxDemo>
      <CheckboxDemo defaultChecked disabled>
        Check-box
      </CheckboxDemo>

      <Pagination />

      <SelectNew onChange={onChangeHandler}  placeholder={'Select…'} options={options}>
      </SelectNew>

      <SelectNew defaultValue={'2'} onChange={onChangeHandler}>
        <SelectItem value={'1'}>Item 1</SelectItem>
        <SelectItem value={'2'}>Item 2</SelectItem>
        <SelectItem value={'3'}>Item 3</SelectItem>
      </SelectNew>
      <SelectNew
        fullwidth
        label={'Select fruit'}
        onChange={onChangeHandler}
        placeholder={'Select…'}
      >
        <SelectItem value={'1'}>Item 1</SelectItem>
        <SelectItem value={'2'}>Item 2</SelectItem>
        <SelectItem value={'3'}>Item 3</SelectItem>
      </SelectNew>
      <SelectNew disabled label={'Select fruit'} onChange={onChangeHandler} placeholder={'Select…'}>
        <SelectItem value={'1'}>Item 1</SelectItem>
        <SelectItem value={'2'}>Item 2</SelectItem>
        <SelectItem value={'3'}>Item 3</SelectItem>
      </SelectNew>
    </div>
  )
}
