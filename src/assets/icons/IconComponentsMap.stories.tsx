import React, {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import { SvgWrapper, SvgWrapperProps } from '@/assets/icons/wrapper'
import { Meta, StoryObj } from '@storybook/react'

import styles from './SvgComp.module.scss'

import {
  ArrowBackOutline,
  ArrowForwardOutline,
  ArrowIosBack,
  ArrowIosBackOutline,
  ArrowIosDownOutline,
  ArrowIosForward,
  ArrowIosForwardOutline,
  ArrowIosUp,
  Block,
  Bookmark,
  BookmarkOutline,
  Calendar,
  CalendarOutline,
  Close,
  CloseOutline,
  ColorPaletteOutline,
  Copy,
  CopyOutline,
  CreditCard,
  CreditCardOutline,
  Edit2,
  Edit2Outline,
  Email,
  EmailOutline,
  Expand,
  ExpandOutline,
  Eye,
  EyeOff,
  EyeOffOutline,
  EyeOutline,
  FacebookSvgrepoCom11,
  FunnelOutline1,
  GithubSvgrepoCom31,
  GoogleSvgrepoCom1,
  Heart,
  HeartOutline,
  Home,
  HomeOutline,
  Image,
  ImageOutline,
  Layers,
  LayersOutline,
  LogOut,
  LogOutOutline,
  Maximize,
  MaximizeOutline,
  MenuOutline,
  MessageCircle,
  MessageCircleOutline,
  Mic,
  MicOutline,
  MoreHorizontal,
  MoreHorizontalOutline,
  MoreVerticalOutline,
  Paid,
  PaperPlane,
  PaperPlaneOutline,
  PauseCircle,
  PauseCircleOutline,
  PaypalSvgrepoCom4,
  Person,
  PersonAdd,
  PersonAddOutline,
  PersonOutline,
  PersonRemove,
  PersonRemoveOutline,
  Pin,
  PinOutline,
  PlayCircle,
  PlayCircleOutline,
  PlusCircle,
  PlusCircleOutline,
  PlusSquare,
  PlusSquareOutline,
  RadioButtonChecked,
  RadioButtonUnchecked,
  Recaptchalogo1,
  Search,
  SearchOutline,
  Settings,
  SettingsOutline,
  Star,
  StarOutline,
  StripeSvgrepoCom4,
  Trash,
  TrashOutline,
  TrendingUp,
  TrendingUpOutline,
} from './components'

const SvgComp: MemoExoticComponent<
  ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
>[] = [
  ArrowBackOutline,
  ArrowForwardOutline,
  ArrowIosBack,
  ArrowIosBackOutline,
  ArrowIosDownOutline,
  ArrowIosForward,
  ArrowIosForwardOutline,
  ArrowIosUp,
  Block,
  Bookmark,
  BookmarkOutline,
  Calendar,
  CalendarOutline,
  Close,
  CloseOutline,
  ColorPaletteOutline,
  Copy,
  CopyOutline,
  CreditCard,
  CreditCardOutline,
  Edit2,
  Edit2Outline,
  Email,
  EmailOutline,
  Expand,
  ExpandOutline,
  Eye,
  EyeOff,
  EyeOffOutline,
  EyeOutline,
  FacebookSvgrepoCom11,
  FunnelOutline1,
  GithubSvgrepoCom31,
  GoogleSvgrepoCom1,
  Heart,
  HeartOutline,
  Home,
  HomeOutline,
  Image,
  ImageOutline,
  Layers,
  LayersOutline,
  LogOut,
  LogOutOutline,
  Maximize,
  MaximizeOutline,
  MenuOutline,
  MessageCircle,
  MessageCircleOutline,
  Mic,
  MicOutline,
  MoreHorizontal,
  MoreHorizontalOutline,
  MoreVerticalOutline,
  Paid,
  PaperPlane,
  PaperPlaneOutline,
  PauseCircle,
  PauseCircleOutline,
  PaypalSvgrepoCom4,
  Person,
  PersonAdd,
  PersonAddOutline,
  PersonOutline,
  PersonRemove,
  PersonRemoveOutline,
  Pin,
  PinOutline,
  PlayCircle,
  PlayCircleOutline,
  PlusCircle,
  PlusCircleOutline,
  PlusSquare,
  PlusSquareOutline,
  RadioButtonChecked,
  RadioButtonUnchecked,
  Recaptchalogo1,
  Search,
  SearchOutline,
  Settings,
  SettingsOutline,
  Star,
  StarOutline,
  StripeSvgrepoCom4,
  Trash,
  TrashOutline,
  TrendingUp,
  TrendingUpOutline,
]

const meta: {
  component: <T extends React.ElementType>(props: SvgWrapperProps<T>) => React.ReactNode
  parameters: { category: string; content: string }
  tags: string[]
  title: string
} = {
  component: SvgWrapper,
  parameters: {
    category: 'stories',
    content: 'IconComponentsMap',
  },

  tags: ['autodocs'],
  title: 'Components/SvgComp',
} satisfies Meta<typeof AllComponents>

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => {
    const [hoverIndex, setHoverIndex] = useState<null | number>(null)

    return (
      <div className={styles.container}>
        {SvgComp.map((Component, index) => (
          <div
            className={`${styles.item} ${
              hoverIndex === index ? styles.itemHovered : styles.itemNotHovered
            }`}
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <SvgWrapper SvgComponent={Component} size={'2rem'} wrapper={'button'} />
          </div>
        ))}
      </div>
    )
  },
}
