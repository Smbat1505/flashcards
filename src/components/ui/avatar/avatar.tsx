import { CSSProperties, ComponentPropsWithoutRef, ReactElement } from 'react'

import { getAvatarFallbackText } from '@/components/ui/avatar/avatarFallbackTextGenerator'
import * as RadixAvatar from '@radix-ui/react-avatar'
import * as Tooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'

import s from './avatar.module.scss'

/**
 * Renders an Avatar component with an image, fallback text, and tooltip.
 *
 * @param {AvatarProps} props - The props for the Avatar component.
 * @param {string} props.className - Additional CSS class names for the Avatar.
 * @param {string} props.fallbackAvatarText - The fallback text for the Avatar.
 * @param {string} props.imageAltText - The alt text for the Avatar image.
 * @param {string} props.imageUrl - The URL of the Avatar image.
 * @param {string | number} props.size - The size of the Avatar. Defaults to '2.25rem'.
 * @param {CSSProperties} props.style - Additional inline styles for the Avatar.
 * @param {string} props.tooltipText - The text to display in the tooltip.
 * @param {string} props.userName - The user name used to generate the fallback text if the avatar fallback text is not provided.
 * @return {ReactElement} The rendered Avatar component.
 */

export const Avatar = (props: AvatarProps): ReactElement => {
  const {
    className,
    fallbackAvatarText,
    imageAltText,
    imageUrl,
    size,
    style,
    tooltipText,
    userName,
  } = props

  const avatarFallbackText = getAvatarFallbackText(fallbackAvatarText, userName)

  const avatarSize = size || '2.25rem'
  const avatarStyle = {
    ...style,
    height: avatarSize,
    width: avatarSize,
  }

  const ClassNames = {
    avatar: clsx(s.AvatarImage, className),
    fallback: s.AvatarFallback,
    root: s.AvatarRoot,
    tooltipArrow: s.TooltipArrow,
    tooltipContent: s.TooltipContent,
  }

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <RadixAvatar.Root className={ClassNames.root} style={avatarStyle}>
            <RadixAvatar.Image
              alt={imageAltText}
              aria-label={imageAltText}
              className={ClassNames.avatar}
              src={imageUrl}
            />
            <RadixAvatar.Fallback className={ClassNames.fallback} delayMs={600}>
              {avatarFallbackText}
            </RadixAvatar.Fallback>
          </RadixAvatar.Root>
        </Tooltip.Trigger>
        <Tooltip.Content className={ClassNames.tooltipContent} sideOffset={5}>
          {tooltipText}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

interface AvatarProps extends ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  className?: string | undefined
  fallbackAvatarText?: string | undefined
  imageAltText: string | undefined
  imageUrl: string | undefined
  size?: number | string
  style?: CSSProperties
  tooltipText?: string | undefined
  userName?: string | undefined
}
