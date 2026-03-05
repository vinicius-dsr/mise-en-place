import { about } from '@/data/content'
import { useReveal } from '@/hooks/useReveal'
import { Utensils, TrendingUp } from 'lucide-react'

type AboutSectionProps = {
  id: string
}

const iconMap = {
  utensils: Utensils,
  'trending-up': TrendingUp,
} as const

export function AboutSection({ id }: AboutSectionProps) {
  const { ref, visible } = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className="bg-[#FAF8EF]"
    >
      <div
        className={`container-page grid gap-10 py-16 md:grid-cols-[1.1fr,1fr] md:items-center lg:py-24 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } transition-all duration-700`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 self-end">
            <img
              src={about.images[0].src}
              alt={about.images[0].alt}
              className="h-64 w-full rounded-2xl object-cover shadow-md md:h-72"
            />
          </div>
          <div className="-mt-10 space-y-4 md:-mt-16">
            <img
              src={about.images[1].src}
              alt={about.images[1].alt}
              className="h-52 w-full rounded-2xl object-cover shadow-md md:h-64"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="heading-section text-3xl md:text-4xl">{about.title}</h2>
          <p className="paragraph-muted">{about.description}</p>
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            {about.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <div
                  key={feature.title}
                  className="flex flex-1 items-start gap-4 rounded-xl bg-brand-cream p-5 shadow-sm"
                >
                  <div className="mt-1 rounded-lg bg-brand-cream p-3 text-[#8B4513]">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#273617]">{feature.title}</h3>
                    <p className="mt-1 text-xs text-[#273617]/80">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

