import { services } from '@/data/content'
import { useReveal } from '@/hooks/useReveal'
import { ServiceCard } from '@/components/ui/ServiceCard'

type ServicesSectionProps = {
  id: string
}

export function ServicesSection({ id }: ServicesSectionProps) {
  const { ref, visible } = useReveal()

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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-3xl md:text-4xl">{services.sectionTitle}</h2>
          <p className="paragraph-muted mt-4">{services.sectionSubtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.items.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              icon={item.icon as 'camera' | 'shield-check' | 'target'}
              featured={item.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

