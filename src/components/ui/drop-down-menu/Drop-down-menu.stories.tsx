import type { Meta, StoryObj } from '@storybook/react'

import { Edit2, LogOut, Person, PlayCircle, Trash } from '@/assets/icons/components'
import ivan from '@/assets/img/ivan.jpeg'
import { DropDownMenu, dropDownMenuList, userBarProps } from '@/components/ui/drop-down-menu'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Avatar } from '../avatar/avatar'
import { DropDownList } from './Drop-down-list'
import { UserBarDropDown } from './Drop-down-user-bar'
const meta = {
  argTypes: {},
  component: DropDownMenu,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Drop-down-menu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

const options: dropDownMenuList[] = [
  { icon: <PlayCircle height={'16'} width={'16'} />, redirect: '#', title: 'Learn' },
  { icon: <Edit2 height={'16'} width={'16'} />, redirect: '#', title: 'Edit' },
  { icon: <Trash height={'16'} width={'16'} />, redirect: '#', title: 'Delete' },
]

const userOptions: dropDownMenuList[] = [
  { icon: <Person height={'16'} width={'16'} />, redirect: '#', title: 'My Profile' },
  { icon: <LogOut height={'16'} width={'16'} />, redirect: '#', title: 'Sign Out' },
]

const userBarInfo: userBarProps = {
  avatar: ivan,
  email: 'j&johnson@gmail.com',
  id: 1,
  userName: 'Ivan',
}

export const WithAvatar: Story = {
  args: {
    children: (
      <>
        <UserBarDropDown
          avatar={userBarInfo.avatar}
          email={userBarInfo.email}
          id={userBarInfo.id}
          userName={userBarInfo.userName}
        />
        <DropDownList options={userOptions} />
      </>
    ),
    trigger: <Avatar imageUrl={userBarInfo?.avatar} />,
  },
}

export const WithThreeDots: Story = {
  args: {
    children: <DropDownList options={options} />,
  },
}
