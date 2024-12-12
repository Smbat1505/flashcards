import React from 'react'

import { LogOut, Person } from '@/assets/icons/components'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { UserBarDropDown } from '@/components/ui/drop-down-menu/Drop-down-user-bar'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

import logo from './logo.svg'

type HeaderPropsType = {
  showAvatar: boolean
}

export const Header = (props: HeaderPropsType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.inner}>
          <img className={s.logo} src={logo} />
        </div>
        <div className={s.inner}>
          {props.showAvatar ? (
            <>
              <Typography className={s.userName} variant={'subtitle1'}>
                Ivan
              </Typography>
              <DropDownMenu
                onClose={() => {}}
                onOpenChange={() => {}}
                trigger={
                  <Avatar
                    imageUrl={
                      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                    }
                  />
                }
              >
                <React.Fragment key={'.0'}>
                  <UserBarDropDown
                    avatar={
                      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                    }
                    email={'j&johnson@gmail.com'}
                    id={1}
                    userName={'Ivan'}
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
            <Button variant={'secondary'}>Sign In</Button>
          )}
        </div>
      </div>
    </div>
  )
}
