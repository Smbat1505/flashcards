import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import { MoreVerticalOutline } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { menu } from '@/components/ui/dropDown/animations'
import * as ToolbarMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from 'src/components/ui/dropDown/Toolbar.module.scss'

export const ToolbarMenu: FC<ToolbarMenuProps> = (props): ReactNode => {
  const { align = 'end', children, className, style, trigger, ...rest } = props
  const Classes = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    button: s.button,
    itemsBox: s.itemsBox,
    root: clsx(s.content, className),
  }

  const [open, setOpen] = useState(false)

  return (
    <ToolbarMenuRadix.Root onOpenChange={setOpen} open={open} {...rest}>
      <ToolbarMenuRadix.Trigger>
        <AnimatePresence>
          {trigger ?? (
            <motion.button>
              <SvgWrapper
                SvgComponent={MoreVerticalOutline}
                color={'currentcolor'}
                size={20}
                wrapper={'button'}
              />
            </motion.button>
          )}
        </AnimatePresence>
      </ToolbarMenuRadix.Trigger>

      <AnimatePresence>
        {open && (
          <ToolbarMenuRadix.Portal forceMount>
            <ToolbarMenuRadix.Content
              align={align}
              asChild
              className={Classes.root}
              forceMount
              onClick={event => event.stopPropagation()}
              sideOffset={8}
              style={style}
            >
              <motion.div
                animate={open ? 'open' : 'closed'}
                exit={'closed'}
                initial={'closed'}
                variants={menu}
              >
                <ToolbarMenuRadix.Arrow asChild className={Classes.arrowBox}>
                  <div className={Classes.arrow} />
                </ToolbarMenuRadix.Arrow>
                <div className={Classes.itemsBox}>{children}</div>
              </motion.div>
            </ToolbarMenuRadix.Content>
          </ToolbarMenuRadix.Portal>
        )}
      </AnimatePresence>
    </ToolbarMenuRadix.Root>
  )
}

export interface ToolbarMenuProps extends ComponentPropsWithoutRef<typeof ToolbarMenuRadix.Root> {
  align?: 'center' | 'end' | 'start'
  children?: ReactNode
  className?: string
  style?: CSSProperties
  trigger?: ReactNode
}
