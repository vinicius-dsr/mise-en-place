import { hero } from '@/data/content'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useReveal } from '@/hooks/useReveal'

type HeroSectionProps = {
  id: string
}

export function HeroSection({ id }: HeroSectionProps) {
  const { ref, visible } = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className="bg-brand-cream"
    >
      <div
        className={`container-page grid gap-10 py-16 md:grid-cols-2 md:items-center lg:py-24 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } transition-all duration-700`}
      >
        <div className="space-y-6">
          <Badge className="bg-red">{hero.badge}</Badge>
          <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl">
            {(() => {
              const text = hero.title
              const highlight = hero.highlightWord
              const index = text.indexOf(highlight)

              if (index === -1) {
                return <span className="block">{text}</span>
              }

              const before = text.slice(0, index)
              const after = text.slice(index + highlight.length)

              return (
                <>
                  <span className="block">{before.trimEnd()}</span>
                  <span className="block">
                    <span className="font-serif italic text-brand-red font-thin">{highlight}</span>
                    {after}
                  </span>
                </>
              )
            })()}
          </h1>
          <p className="paragraph-muted max-w-md">{hero.subtitle}</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button variant="outline" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative max-w-lg w-full">
            <img
              src={hero.heroImage.src}
              alt={hero.heroImage.alt}
              className="h-full w-full max-auto rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

