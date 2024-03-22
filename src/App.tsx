import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Pagination } from '@/components/ui/pagination'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
      <Button onClick={() => (window.location.href = 'https://google.com')}>hello</Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi
      </Button>
      <CheckboxDemo
        defaultChecked
        onChange={(a: boolean) => {
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
    </div>
  )
}
