import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Pagination } from '@/components/ui/pagination'
import { SelectDemo } from '@/components/ui/select'

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
      <SelectDemo onChange={onChangeHandler} options={selectOptions} placeholder={'Select…'} />
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
    </div>
  )
}
