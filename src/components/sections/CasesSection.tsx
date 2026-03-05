import { cases } from '@/data/content'
import { useReveal } from '@/hooks/useReveal'
import { ArrowRight } from 'lucide-react'

type CasesSectionProps = {
  id: string
}

export function CasesSection({ id }: CasesSectionProps) {
  const { ref, visible } = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className="bg-[#7C4A1E]"
    >
      <div
        className={`container-page py-16 text-brand-cream lg:py-24 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } transition-all duration-700`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tightest md:text-4xl">
              {cases.sectionTitle}
            </h2>
            <p className="mt-2 text-sm text-brand-cream/80 md:text-base">
              {cases.sectionSubtitle}
            </p>
          </div>
            {/* <a
            href={cases.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cream/80 hover:text-brand-orange"
          >
            {cases.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a> */}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cases.items.map((item) => (
            <article
              key={item.tag}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#273617]/40 via-[#273617]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {item.tag}
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-white">{item.result}</p>
                <p className="mt-1 text-sm text-white/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

