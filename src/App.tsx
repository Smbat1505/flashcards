import { Provider } from 'react-redux'

import { LogOut, Search } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
import { RadioGroupDemo } from '@/components/ui/radiogroup'
import { SelectItem, SelectNew } from '@/components/ui/select/select'
import { TextField } from '@/components/ui/textField'
import { Router } from '@/router'
import { store } from '@/services/store'

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
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      {/*<div*/}
      {/*  style={{*/}
      {/*    alignContent: 'flex-start',*/}
      {/*    alignItems: 'flex-start',*/}
      {/*    border: '2px solid green',*/}
      {/*    display: 'flex',*/}
      {/*    flexDirection: 'column',*/}
      {/*    gap: '12px',*/}
      {/*    justifyContent: 'flex-start',*/}
      {/*    padding: '50px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Header></Header>*/}
      {/*  <Button>Primary Button</Button>*/}
      {/*  <Button>*/}
      {/*    <Search width={'1rem'} />*/}
      {/*    Primary Button*/}
      {/*  </Button>*/}
      {/*  <Button>*/}
      {/*    <LogOut width={'1rem'} />*/}
      {/*    Hearth*/}
      {/*  </Button>*/}
      {/*  <Button*/}
      {/*    as={'a'}*/}
      {/*    fullWidth={false}*/}
      {/*    href={'https://my.beltelecom.by/login'}*/}
      {/*    onClick={() => console.log('clicked')}*/}
      {/*  >*/}
      {/*    Primary Button As a*/}
      {/*  </Button>*/}
      {/*  <Button onClick={() => console.log('clicked')}>Primary Button with Icon</Button>*/}
      {/*  <Button variant={'secondary'}>Secondary Button</Button>*/}
      {/*  <Button variant={'secondary'}>Secondary Button with Icon</Button>*/}
      {/*  <Button fullWidth variant={'secondary'}>*/}
      {/*    Secondary Button with Icon*/}
      {/*  </Button>*/}
      {/*  <CheckboxDemo*/}
      {/*    defaultChecked*/}
      {/*    onFocus={() => console.log('checkbox focus')}*/}
      {/*    onValueChange={a => {*/}
      {/*      console.log(a)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    rememberMe*/}
      {/*  </CheckboxDemo>*/}
      {/*  <CheckboxDemo*/}
      {/*    defaultChecked*/}
      {/*    disabled*/}
      {/*    onValueChange={a => {*/}
      {/*      console.log(a)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    rememberMe*/}
      {/*  </CheckboxDemo>*/}

      {/*  <RadioGroupDemo*/}
      {/*    defaultValue={'apple'}*/}
      {/*    name={'radio1'}*/}
      {/*    onValueChange={value => console.log(value)}*/}
      {/*    options={options}*/}
      {/*  />*/}
      {/*  <RadioGroupDemo*/}
      {/*    defaultValue={'grapes'}*/}
      {/*    disabled*/}
      {/*    name={'radio2'}*/}
      {/*    onValueChange={value => console.log(value)}*/}
      {/*    options={options}*/}
      {/*  />*/}
      {/*  <RadioGroupDemo*/}
      {/*    defaultValue={'apple'}*/}
      {/*    name={'radio3'}*/}
      {/*    onValueChange={value => console.log(value)}*/}
      {/*    options={options}*/}
      {/*  />*/}
      {/*  <Pagination*/}
      {/*    onPageChange={onChangeHandler}*/}
      {/*    onPerPageChange={onChangeHandler}*/}
      {/*    perPageOptions={['10', '20', '30', '50', '100']}*/}
      {/*    totalPages={21}*/}
      {/*  />*/}

      {/*  <SelectNew onChange={onChangeHandler} options={options} placeholder={'Select…'}></SelectNew>*/}

      {/*  <SelectNew defaultValue={'2'} onChange={onChangeHandler}>*/}
      {/*    <SelectItem value={'1'}>Item 1</SelectItem>*/}
      {/*    <SelectItem value={'2'}>Item 2</SelectItem>*/}
      {/*    <SelectItem value={'3'}>Item 3</SelectItem>*/}
      {/*  </SelectNew>*/}
      {/*  <SelectNew*/}
      {/*    fullwidth*/}
      {/*    label={'Select fruit'}*/}
      {/*    onChange={onChangeHandler}*/}
      {/*    placeholder={'Select…'}*/}
      {/*  >*/}
      {/*    <SelectItem value={'1'}>Item 1</SelectItem>*/}
      {/*    <SelectItem value={'2'}>Item 2</SelectItem>*/}
      {/*    <SelectItem value={'3'}>Item 3</SelectItem>*/}
      {/*  </SelectNew>*/}
      {/*  <SelectNew*/}
      {/*    disabled*/}
      {/*    label={'Select fruit'}*/}
      {/*    onChange={onChangeHandler}*/}
      {/*    placeholder={'Select…'}*/}
      {/*  >*/}
      {/*    <SelectItem value={'1'}>Item 1</SelectItem>*/}
      {/*    <SelectItem value={'2'}>Item 2</SelectItem>*/}
      {/*    <SelectItem value={'3'}>Item 3</SelectItem>*/}
      {/*  </SelectNew>*/}
      {/*  <TextField*/}
      {/*    labelText={'Default'}*/}
      {/*    onChange={() => {}}*/}
      {/*    // onClearClick={() => {}}*/}
      {/*    placeholder={'Enter text...'}*/}
      {/*    type={'text'}*/}
      {/*  />*/}
      {/*</div>*/}
    </>
  )
}
