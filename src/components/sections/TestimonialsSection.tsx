import { testimonials } from '@/data/content'
import { useReveal } from '@/hooks/useReveal'

type TestimonialsSectionProps = {
  id: string
}

export function TestimonialsSection({ id }: TestimonialsSectionProps) {
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
          <h2 className="heading-section text-3xl md:text-4xl">{testimonials.sectionTitle}</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.items.map((item) => (
            <article
              key={item.author}
              className="relative overflow-hidden rounded-3xl bg-[#FAF8EF] px-10 py-9 shadow-sm"
            >
              <span className="pointer-events-none absolute right-5 top-3 text-7xl font-serif text-brand-green/15">
                &rdquo;
              </span>
              <p className="relative text-sm leading-relaxed text-brand-green/80">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-green">{item.author}</p>
                  <p className="text-xs font-medium text-brand-red">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

