import { CSSProperties, ComponentPropsWithoutRef, ReactNode, useState } from 'react'

import { MoreVerticalOutline } from '@/assets/icons/components'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { menu } from '@/components/ui/toolbar/animations'
import * as ToolbarMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from '@/components/ui/toolbar/toolbar.module.scss'

/**
 * Renders a toolbar menu component.
 *
 * @param {ToolbarMenuProps} props - The properties for the toolbar menu.
 * @param {string} [props.align='end'] - The alignment of the menu.
 * @param {ReactNode} props.children - The children components to render inside the menu.
 * @param {string} [props.className] - The additional CSS class for the menu.
 * @param {CSSProperties} [props.style] - The additional inline styles for the menu.
 * @param {ReactNode} [props.trigger] - The trigger component to open the menu.
 * @param {...rest} props - Additional properties for the menu.
 * @returns {ReactNode} The rendered toolbar menu component.
 */
export const ToolbarMenu = (props: ToolbarMenuProps): ReactNode => {
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
      <ToolbarMenuRadix.Trigger className={Classes.button}>
        <AnimatePresence>
          {trigger ?? (
            <motion.button>
              <SvgWrapper SvgComponent={MoreVerticalOutline} size={20} wrapper={'button'} />
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
                <ToolbarMenuRadix.Arrow className={Classes.arrow} />
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
