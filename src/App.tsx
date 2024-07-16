import { LogOut, Search } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
import { SelectItem, SelectNew } from '@/components/ui/select/select'
import { TextField } from '@/components/ui/textField'

const onChangeHandler = (value: number | string) => {
  console.log(value)
}

type optionsType = {
  label: string
  value: string
}

const options: Array<optionsType> = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
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
      <Header></Header>
      <Button>Primary Button</Button>
      <Button>
        <Search width={'1rem'} />
        Primary Button
      </Button>
      <Button>
        <LogOut width={'1rem'} />
        Hearth
      </Button>
      <Button
        as={'a'}
        fullWidth={false}
        href={'https://my.beltelecom.by/login'}
        onClick={() => console.log('clicked')}
      >
        Primary Button As a
      </Button>
      <Button onClick={() => console.log('clicked')}>Primary Button with Icon</Button>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button variant={'secondary'}>Secondary Button with Icon</Button>
      <Button fullWidth variant={'secondary'}>
        Secondary Button with Icon
      </Button>
      <CheckboxDemo
        defaultChecked
        onValueChange={a => {
          console.log(a)
        }}
      >
        rememberMe
      </CheckboxDemo>
      <CheckboxDemo
        defaultChecked
        disabled
        onValueChange={a => {
          console.log(a)
        }}
      >
        rememberMe
      </CheckboxDemo>
      {/*<ControlledCheckbox name={'ssdv'} ></ControlledCheckbox>*/}
      {/*<CheckboxDemo name={'Check-box'} defaultChecked>Check-box</CheckboxDemo>*/}
      {/*<CheckboxDemo name={'rememberMe'}>Check-box</CheckboxDemo>*/}
      {/*<CheckboxDemo disabled>Check-box</CheckboxDemo>*/}
      {/*<CheckboxDemo defaultChecked disabled>*/}
      {/*  Check-box*/}
      {/*</CheckboxDemo>*/}

      <Pagination
        onPageChange={onChangeHandler}
        onPerPageChange={onChangeHandler}
        perPageOptions={['10', '20', '30', '50', '100']}
        totalPages={21}
      />

      <SelectNew onChange={onChangeHandler} options={options} placeholder={'Select…'}></SelectNew>

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
      <TextField
        labelText={'Default'}
        onChange={() => {}}
        // onClearClick={() => {}}
        placeholder={'Enter text...'}
        type={'text'}
      />
    </div>
  )
}
