import type { Meta, StoryObj } from '@storybook/react'

import { Typography, VARIANTS } from '@/components/ui/typography/typography'

const meta: Meta<typeof Typography> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: VARIANTS,
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
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],

  render: () => (
    <div style={{ display: 'grid', justifyContent: 'center', width: '100%' }}>
      <table style={{ textAlign: 'left', width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h1'}>H1</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h2'}>H2</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h3'}>H3</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h3'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h4'}>H4</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'h4'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'body1'}>Body1</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'body1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'subtitle1'}>Subtitle1</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'subtitle1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'body2'}>Body2</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'body2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'subtitle2'}>Subtitle2</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'subtitle2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'caption'}>Caption</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'caption'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'overline'}>Overline</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'overline'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'link1'}>Link1</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'link1'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'link2'}>Link2</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'link2'} {...All.args} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
              <Typography variant={'error'}>Error</Typography>
            </td>
            <td style={{ gap: '32px', marginBottom: '30px' }}>
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
