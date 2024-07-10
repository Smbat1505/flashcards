import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'stupid'),
  rememberMe: z.boolean().default(false),
})
