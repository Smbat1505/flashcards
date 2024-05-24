import { MotionProps } from 'framer-motion'

export const item = {
  transition: { opacity: { duration: 0.3 } },
  variants: {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  },
} satisfies MotionProps
