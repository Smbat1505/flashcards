import { ComponentProps, ComponentRef, ReactNode, forwardRef, useState } from 'react'

import CloseCrossOutline from '@/assets/icons/components/Close'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Typography } from '../typography'
import { FieldErrors, UseFormReset } from "react-hook-form";

type ModalProps = {
  closeHandler?: (isOpen: boolean) => void
  contentContainerClassName?: string
  footer?: {
    buttonPrimary: ReactNode
    buttonSecondary: ReactNode
  }
  onSubmit?: () => void
  overlayClassName?: string
  title?: string
  trigger: ReactNode
  withCloseBtn?: boolean
  reset: UseFormReset<any>
  formState: {errors: FieldErrors<{isPrivate: boolean, name: string}>}
} & ComponentProps<'div'>

export const Modal = forwardRef<ComponentRef<'div'>, ModalProps>((props, ref) => {
  const {
    children,
    className,
    contentContainerClassName,
    footer,
    onSubmit,
    overlayClassName,
    title,
    trigger,
    withCloseBtn = true,
    reset,
    formState
  } = props

  const classNames = {
    contentWrapper: clsx(s.contentWrapper, contentContainerClassName),
    dialogContent: clsx(s.dialogContent, className),
    dialogOverlay: clsx(s.dialogOverlay, overlayClassName),
    dialogTitle: s.dialogTitle,
    header: s.header,
    iconButton: s.iconButton,
  }

  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
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
                <button aria-label={'Close'} className={classNames.iconButton}>
                  <CloseCrossOutline />
                </button>
              </Dialog.Close>
            )}
          </header>
          <form
            onSubmit={(event) => {
              if (onSubmit) {
                onSubmit();
                if (!formState.errors.name) {
                  setOpen(false);
                  reset();
                }
              }
              event.preventDefault()
            }

            }
          >
            <div className={classNames.contentWrapper}>{children}</div>
            <div className={s.footerWrapper}>
              <Dialog.Close aria-label={'Close'} style={{ height: '25px' }}>
                <div>{footer?.buttonSecondary}</div>
              </Dialog.Close>
              <div>{footer?.buttonPrimary}</div>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})
