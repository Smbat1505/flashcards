import { z } from 'zod'

export type signUpFormValues = z.infer<typeof signUpSchema>

export const signUpSchema = z.object({
  confirmPassword: z.string().min(5, 'stupid'),
  email: z.string().email(),
  password: z.string().min(5, 'stupid'),
})
