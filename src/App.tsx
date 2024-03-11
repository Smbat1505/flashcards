import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox'
import { Checkbox1 } from '@/components/ui/checkbox/checkbox1'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button onClick={() => (window.location.href = 'https://google.com')}>hello</Button>
      <Button as={'a'} href={'https://google.com'}>
        Hi
      </Button>
      <CheckboxDemo defaultChecked />
      <CheckboxDemo defaultChecked={false} />
      <Checkbox1 />
    </div>
  )
}
