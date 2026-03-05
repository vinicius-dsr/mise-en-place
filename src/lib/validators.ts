import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Número inválido').max(15),
  restaurant: z.string().min(2, 'Nome do restaurante obrigatório'),
  need: z.string().min(1, 'Selecione uma opção'),
})

export type ContactFormData = z.infer<typeof contactSchema>

