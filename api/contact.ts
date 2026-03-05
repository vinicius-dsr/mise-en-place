// Vercel Serverless Function
import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { contactSchema } from '../src/lib/validators'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const { name, email, whatsapp, restaurant, need } = parsed.data

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Site Mise en Place" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      subject: `Nova consultoria: ${restaurant} — ${need}`,
      html: `
        <h2>Nova solicitação de consultoria</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Restaurante:</strong> ${restaurant}</p>
        <p><strong>Necessidade:</strong> ${need}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao enviar e-mail' })
  }
}

