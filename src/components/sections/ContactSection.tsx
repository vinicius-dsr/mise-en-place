import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contact as contactContent, siteConfig } from '@/data/content'
import { contactSchema, type ContactFormData } from '@/lib/validators'
import { useReveal } from '@/hooks/useReveal'

type ContactSectionProps = {
  id: string
}

export function ContactSection({ id }: ContactSectionProps) {
  const { ref, visible } = useReveal()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    setSuccess(false)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSuccess(true)
        reset()
      } else {
        setError('Não foi possível enviar sua mensagem. Tente novamente.')
      }
    } catch (e) {
      console.error(e)
      setError('Ocorreu um erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id={id}
      ref={ref}
      className="bg-brand-cream"
    >
      <div
        className={`container-page py-16 lg:py-24 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } transition-all duration-700`}
      >
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg md:flex">
          <div className="flex-1 bg-brand-green px-8 py-10 text-brand-cream md:p-20">
            <h2 className="font-serif text-5xl font-bold tracking-tightest">
              {contactContent.title}
            </h2>
            <p className="mt-8 text-base text-brand-cream/75">{contactContent.description}</p>
            <ul className="mt-8 space-y-4 text-sm text-brand-cream/85">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p>{siteConfig.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p>{siteConfig.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold">Base</p>
                  <p>{siteConfig.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white px-8 py-10 md:p-20">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="name">
                  Nome completo
                </label>
                <input
                  id="name"
                  {...register('name')}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-green shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/70"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-brand-red">{errors.name.message}</p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-brand-green" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-green shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/70"
                    placeholder="voce@restaurante.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-semibold text-brand-green" htmlFor="whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    {...register('whatsapp')}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-green shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/70"
                    placeholder="(11) 99999-0000"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-xs text-brand-red">{errors.whatsapp.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="restaurant">
                  Nome do restaurante
                </label>
                <input
                  id="restaurant"
                  {...register('restaurant')}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-green shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/70"
                  placeholder="Nome do seu restaurante"
                />
                {errors.restaurant && (
                  <p className="mt-1 text-xs text-brand-red">{errors.restaurant.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="need">
                  Sua necessidade principal
                </label>
                <select
                  id="need"
                  {...register('need')}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-green shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/70"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {contactContent.needsOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.need && (
                  <p className="mt-1 text-xs text-brand-red">{errors.need.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-brand-green py-4 text-sm font-semibold tracking-wide text-brand-cream shadow-sm transition-colors hover:bg-brand-green/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Enviando...' : contactContent.submitLabel}
              </button>

              {success && (
                <p className="text-sm text-emerald-600">{contactContent.successMessage}</p>
              )}
              {error && <p className="text-sm text-brand-red">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

