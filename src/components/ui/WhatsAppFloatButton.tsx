import { siteConfig } from '@/data/content'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppFloatButton() {
  const url = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}

