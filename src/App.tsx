import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Pagination } from '@/components/ui/pagination'
import { SelectDemo } from '@/components/ui/select'

export function App() {
  return (
    <div style={{ alignContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      justifyContent: 'flex-start',
      padding: '50px',
    border: '2px solid green',
   }}>
      <SelectDemo disabled/>
      <Button fullWidth onClick={() => (window.location.href = 'https://google.com')}>hello</Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi
      </Button>
      <CheckboxDemo
        defaultChecked
        onChange={(a) => {
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
      <SelectDemo/>
      <SelectDemo disabled/>
    </div>
  )
}
