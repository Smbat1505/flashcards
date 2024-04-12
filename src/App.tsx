import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Pagination } from '@/components/ui/pagination'
import { SelectDemo, SelectItem } from '@/components/ui/select'
import { SelectNew } from '@/components/ui/select/SelectNew'

export type selectOptionsType = {
  label: string
  value: string
}

const onChangeHandler = (value: string) => {
  console.log(value)
}

export function App() {
  const selectOptions: Array<selectOptionsType> = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Blueberry',
      value: 'blueberry',
    },
    {
      label: 'Grapes',
      value: 'grapes',
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
    },
  ]

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
      {/*<SelectDemo onChange={onChangeHandler} options={selectOptions} placeholder={'Select…'} />*/}
      <Button fullWidth onClick={() => (window.location.href = 'https://google.com')}>
        hello
      </Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi
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
      <SelectDemo
        fullwidth
        label={'Select fruit'}
        onChange={onChangeHandler}
        options={selectOptions}
        placeholder={'Select…'}
      />
      <SelectDemo
        disabled
        fullwidth
        label={'Select fruit'}
        onChange={onChangeHandler}
        options={selectOptions}
        placeholder={'Select…'}
      />

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
