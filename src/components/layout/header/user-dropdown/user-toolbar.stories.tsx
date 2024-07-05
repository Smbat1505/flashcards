import { UserService } from '@/components/layout/header/user-dropdown/user-DropDown'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof UserService> = {
  component: UserService,
  tags: ['autodocs'],
  title: 'Components/UserService',
} satisfies Meta<typeof UserService>

export default meta
type Story = StoryObj<typeof meta>

export const UserToolbarStories: Story = {
  args: {
    email: 'john.doe@example.com',
    name: 'John Doe',
    photo: 'https://example.com/john-doe.jpg',
    photoDescription: 'Profile photo of John Doe',
    profileLink: 'https://example.com/profile/john-doe',
  },
}
