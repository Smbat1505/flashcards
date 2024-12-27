import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { dropDownMenuList } from '.'
import { Typography } from '../typography'

type Props = {
  options: dropDownMenuList[]
}

export const DropDownList = ({ options }: Props) => {
  const dropDownList = options?.map((el, i) => {
    return (
      <DropdownMenu.Item className={s.menuItem} key={i}>
        <Typography
          as={'a'}
          className={s.item}
          href={el.redirect}
          onClick={el.onClick}
          variant={'caption'}
        >
          {el.icon}
          {el.title}
        </Typography>
      </DropdownMenu.Item>
    )
  })

  return <>{dropDownList}</>
}
