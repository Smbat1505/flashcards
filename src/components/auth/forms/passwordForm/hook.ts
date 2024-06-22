import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useAuthForm = () =>
  useForm<FormState>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  })

const emailSchema = z
  .string({ message: 'E-Mail Address is required' })
  .email({ message: 'Incorrect E-Mail Address. Example mail – example@gmail.com' })

const passwordSchema = z
  .string()
  .min(7, { message: 'Password must be at least 7 characters long' })
  .refine(value => !/\s/.test(value), {
    message: 'Password must not contain spaces',
  })
  .refine(value => /[a-zA-Z]/.test(value), {
    message: 'Password must contain at least one letter',
  })
  .refine(value => /[A-Z]/.test(value), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine(value => /[0-9]/.test(value), {
    message: 'Password must contain at least one number',
  })
  .refine(value => /[^a-zA-Z0-9]/.test(value), {
    message: 'Password must contain at least one special character',
  })

const schema = z.object({
  email: emailSchema.optional(),
  password: passwordSchema.optional(),
})

export type FormState = z.infer<typeof schema>
