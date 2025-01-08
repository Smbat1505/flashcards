import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { Avatar } from '../avatar/avatar'
import { Typography } from '../typography'

export type Props = {
  avatar: string | undefined
  email: string | undefined
  id: number | undefined
  userName: string | undefined
}

export const UserBarDropDown = (props: Props) => {
  const { avatar, email, id, userName } = props

  return (
    <DropdownMenu.Item className={`${s.item} ${s.menuItem} ${s.menuItemUserBar}`} key={id}>
      <Avatar imageUrl={avatar} />
      <div className={s.flexContainer}>
        <Typography as={'span'} variant={'subtitle2'}>
          {userName}
        </Typography>
        <Typography as={'span'} className={s.colorDark} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </DropdownMenu.Item>
  )
}
