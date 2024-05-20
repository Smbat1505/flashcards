import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/ui/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onPageChange: (page: number | string) => console.log(page),
    onPerPageChange: (value: string) => console.log(value),
    perPageOptions: ['10', '20', '30', '50', '100'],
    totalPages: 21,
  },
}
