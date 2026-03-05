import { Camera, CheckCircle2, ShieldCheck, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

type ServiceCardProps = {
  title: string
  description: string
  bullets: string[]
  icon: 'camera' | 'shield-check' | 'target'
  featured?: boolean
}

export function ServiceCard({ title, description, bullets, icon, featured }: ServiceCardProps) {
  const Icon = icon === 'camera' ? Camera : icon === 'shield-check' ? ShieldCheck : Target

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl p-8 shadow-card transition-transform duration-200',
        featured
          ? 'bg-brand-green text-brand-cream'
          : 'bg-white text-brand-green',
        'hover:scale-[1.02]',
      )}
    >
      <div
        className={cn(
          'mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl',
          featured ? 'bg-white/10 text-brand-cream' : 'bg-[#F2EBD1] text-brand-green',
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3
        className={cn(
          'font-serif text-xl font-bold tracking-tightest',
          featured ? 'text-brand-cream' : 'text-brand-green',
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mt-3 text-sm leading-relaxed',
          featured ? 'text-brand-cream/80' : 'text-brand-green/70',
        )}
      >
        {description}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2
              className={cn(
                'mt-[2px] h-4 w-4 flex-shrink-0',
                featured ? 'text-brand-orange' : 'text-brand-green',
              )}
            />
            <span className={featured ? 'text-brand-cream/90' : 'text-brand-green/80'}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

