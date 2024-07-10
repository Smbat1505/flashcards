import { Button } from '@/components/ui/button'

import s from './header.module.scss'

import logo from './logo.svg'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.inner}>
          <img className={s.logo} src={logo} />
        </div>
        <div className={s.inner}>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  )
}
