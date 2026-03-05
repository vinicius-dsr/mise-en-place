import { footer, siteConfig } from '@/data/content'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-dark text-white">
      <div className="container-page py-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <Logo className="h-12 md:h-14" />
            <p className="mt-2 text-xs text-white/60">{siteConfig.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.behance}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Behance
            </a>
          </div>
        </div>
        <p className="py-6 text-center text-xs text-white/40">{footer.copyright}</p>
      </div>
    </footer>
  )
}

