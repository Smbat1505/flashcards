import { ComponentProps, ComponentRef, ReactNode, forwardRef } from 'react'

import CloseCrossOutline from '@/assets/icons/components/Close'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Typography } from '../typography'

type ModalProps = {
  closeHandler?: (isOpen: boolean) => void
  contentContainerClassName?: string
  footer?: {
    buttonPrimary: ReactNode
    buttonSecondary: ReactNode
  }
  onOpenChange?: (open: boolean) => void
  open?: boolean
  overlayClassName?: string
  title?: string
  trigger: ReactNode
  withCloseBtn?: boolean
} & ComponentProps<'div'>

export const Modal = forwardRef<ComponentRef<'div'>, ModalProps>((props, ref) => {
  const {
    children,
    className,
    contentContainerClassName,
    footer,
    onOpenChange,
    overlayClassName,
    title,
    trigger,
    withCloseBtn = true,
  } = props
  // const clickHandler = () => {
  //   closeHandler(false)
  // }

  const classNames = {
    contentWrapper: clsx(s.contentWrapper, contentContainerClassName),
    dialogContent: clsx(s.dialogContent, className),
    dialogOverlay: clsx(s.dialogOverlay, overlayClassName),
    dialogTitle: s.dialogTitle,
    header: s.header,
    iconButton: s.iconButton,
  }

  return (
    <Dialog.Root onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.dialogOverlay} />
        <Dialog.Content className={classNames.dialogContent} ref={ref}>
          <header className={classNames.header}>
            <Dialog.Title className={classNames.dialogTitle}>
              <Typography as={'span'} variant={'h2'}>
                {title}
              </Typography>
            </Dialog.Title>
            {withCloseBtn && (
              <Dialog.Close aria-label={'Close'} style={{ height: '25px' }}>
                <button
                  aria-label={'Close'}
                  className={classNames.iconButton}
                  // onClick={clickHandler}
                >
                  <CloseCrossOutline />
                </button>
              </Dialog.Close>
            )}
          </header>
          <div className={classNames.contentWrapper}>{children}</div>
          <div className={s.footerWrapper}>
            <div>{footer?.buttonSecondary}</div>
            <div>{footer?.buttonPrimary}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})
