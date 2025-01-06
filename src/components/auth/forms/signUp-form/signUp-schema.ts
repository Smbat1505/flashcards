import { z } from 'zod'

export type signUpFormValues = z.infer<typeof signUpSchema>

export const signUpSchema = z
  .object({
    confirmPassword: z.string().min(5, 'password is too short'),
    email: z.string().email(),
    password: z.string().min(5, 'password is too short'),
  })
  .refine(arg => arg.password === arg.confirmPassword, {
    message: 'Passwords does not match',
    path: ['confirmPassword'],
  })
