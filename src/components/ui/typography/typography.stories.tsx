import type { Meta, StoryObj } from '@storybook/react'

import { Typography, VARIANTS } from '@/components/ui/typography/typography'

import s from './typography-story-styles.module.scss'

const meta: Meta<typeof Typography> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: Object.values(VARIANTS),
    },
  },
  component: Typography,

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const All: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
  decorators: [
    Story => (
      <div className={s.decoratorStyles}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],

  render: () => (
    <div className={s.wrapper}>
      <table className={s.tableStyles}>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h1'}>H1</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h2'}>H2</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h3'}>H3</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h3'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h4'}>H4</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'h4'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'body1'}>Body1</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'body1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'subtitle1'}>Subtitle1</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'subtitle1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'body2'}>Body2</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'body2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'subtitle2'}>Subtitle2</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'subtitle2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'caption'}>Caption</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'caption'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'overline'}>Overline</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'overline'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'link1'}>Link1</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'link1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'link2'}>Link2</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'link2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'error'}>Error</Typography>
            </td>
            <td className={s.tableHeaderSpacing}>
              <Typography variant={'error'} {...All.args} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
}

export const H1: Story = {
  args: {
    ...All.args,
    // color: 'black',
    variant: VARIANTS.h1,
  },
}

export const H2: Story = {
  args: {
    ...H1.args,
    variant: VARIANTS.h2,
  },
}
export const H3: Story = {
  args: {
    ...H1.args,
    variant: VARIANTS.h3,
  },
}
export const H4: Story = {
  args: {
    ...H1.args,
    variant: VARIANTS.h4,
  },
}
export const Body1: Story = {
  args: {
    ...H1.args,
    variant: VARIANTS.body1,
  },
}
export const Body2: Story = {
  args: {
    ...H1.args,
    variant: VARIANTS.body2,
  },
}
export const Subtitle1: Story = {
  args: {
    ...H1.args,
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    ...H1.args,
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    ...H1.args,
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    ...H1.args,
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    ...H1.args,
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    ...H1.args,
    variant: 'link2',
  },
}

export const Error: Story = {
  args: {
    ...H1.args,
    variant: 'error',
  },
}
