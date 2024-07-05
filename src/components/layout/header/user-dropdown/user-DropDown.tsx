import { ReactNode } from 'react'

import { LogOut, Person } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Avatar } from '@/components/ui/avatar'
import { Divider } from '@/components/ui/toolbar/divider'
import { ToolbarItem } from '@/components/ui/toolbar/toolbarItem/toolbarItem'
import { ToolbarMenu } from '@/components/ui/toolbar/toolbarMenu'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './user-DropDown.module.scss'

/**
 * Renders a user dropdown menu with the user's information and profile/logout options.
 *
 * @param {userDropDown} props - The properties for the user dropdown menu.
 * @param {string} props.email - The user's email.
 * @param {string} props.name - The user's name.
 * @param {string} props.photo - The URL of the user's photo.
 * @param {string} props.photoDescription - The description of the user's photo.
 * @return {JSX.Element} The user dropdown menu component.
 */

export const UserService = (props: userDropDown): ReactNode => {
  const { email, name, photo, photoDescription } = props
  const IconSize = '1.25rem'

  return (
    <ToolbarMenu
      className={s.userMenu}
      trigger={
        <Avatar
          className={s.userAvatarBtn}
          imageAltText={photoDescription}
          imageUrl={photo}
          tooltipText={'profile settings'}
          userName={name}
        />
      }
    >
      <ToolbarItem asChild className={s.userInfoItem}>
        <Avatar
          className={s.userAvatar}
          imageAltText={photoDescription}
          imageUrl={photo}
          userName={name}
        />

        <div className={s.userDetails}>
          <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
            {name}
          </Typography>
          <Typography as={'div'} className={s.userEmail} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </ToolbarItem>
      <Divider className={s.menuDivider} />

      <ToolbarItem asChild className={s.profileItem}>
        <Typography
          as={'a'}
          className={clsx(s.profileLink, s.link)}
          href={'profileLink'}
          variant={'caption'}
        >
          <button className={s.btn}>
            <SvgWrapper SvgComponent={Person} size={IconSize} wrapper={'span'} />
            My Profile
          </button>
        </Typography>
      </ToolbarItem>
      <Divider className={s.menuDivider} />
      <ToolbarItem className={s.logoutItem}>
        <Typography
          as={'a'}
          className={clsx(s.logoutLink, s.link)}
          href={'profileLink'}
          variant={'caption'}
        >
          <button className={s.btn}>
            <SvgWrapper SvgComponent={LogOut} size={IconSize} wrapper={'span'} />
            Sing out
          </button>
        </Typography>
      </ToolbarItem>
    </ToolbarMenu>
  )
}

export interface userDropDown {
  email?: string
  name?: string
  photo?: string
  photoDescription?: string
  profileLink?: string
}
