import { z } from 'zod'

export type addNewDeckFormValues = z.infer<typeof addNewDeckSchema>

export const addNewDeckSchema = z.object({
  name: z.string().max(200, 'This name is too long'),
  privatePack: z.boolean(),
})
