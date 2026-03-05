import type { ContactFormData } from '@/lib/validators'

export async function sendEmail(data: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Erro ao enviar o formulário')
  }
}

