import { Variants } from 'framer-motion'

export const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      delayChildren: 0.2,
      duration: 0.4,
      staggerChildren: 0.05,
      type: 'spring',
    },
  },
} satisfies Variants
