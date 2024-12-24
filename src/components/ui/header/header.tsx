import React from 'react'

import { LogOut, Person } from '@/assets/icons/components'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { UserBarDropDown } from '@/components/ui/drop-down-menu/Drop-down-user-bar'
import { Typography } from '@/components/ui/typography'
import { AuthMeResponseType } from '@/services/auth/auth.types'

import s from './header.module.scss'

import logo from './logo.svg'

type HeaderPropsType = {
  isAuthenticated: boolean
  userInfo?: AuthMeResponseType
}

export const Header = ({ isAuthenticated, userInfo }: HeaderPropsType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.inner}>
          <img className={s.logo} src={logo} />
        </div>
        <div className={s.inner}>
          {isAuthenticated ? (
            <>
              <Typography className={s.userName} variant={'subtitle1'}>
                {userInfo?.name}
              </Typography>
              <DropDownMenu
                onClose={() => {}}
                onOpenChange={() => {}}
                trigger={<Avatar imageUrl={userInfo?.avatar} />}
              >
                <React.Fragment key={userInfo?.id}>
                  <UserBarDropDown
                    avatar={userInfo?.avatar}
                    email={userInfo?.email}
                    id={userInfo?.id}
                    userName={userInfo?.name}
                  />
                  <DropDownList
                    options={[
                      {
                        icon: <Person height={'16'} width={'16'} />,
                        redirect: '#',
                        title: 'My Profile',
                      },
                      {
                        icon: <LogOut height={'16'} width={'16'} />,
                        redirect: '#',
                        title: 'Sign Out',
                      },
                    ]}
                  />
                </React.Fragment>
              </DropDownMenu>
            </>
          ) : (
            <Button as={'a'} href={'./login'} variant={'secondary'}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
