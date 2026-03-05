import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/data/content'
import type { SectionId } from '@/App'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

type NavbarProps = {
  activeId: SectionId | null
}

export function Navbar({ activeId }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-black/5 bg-brand-cream/90 backdrop-blur-sm transition-all',
        scrolled && 'shadow-sm',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-brand-green/80">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-brand-green',
                    activeId === link.id ? 'font-semibold text-brand-green' : 'text-brand-green/80',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={nav.cta.href}>{nav.cta.label}</Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex items-center justify-center rounded-full border border-brand-green/20 p-2 text-brand-green/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-green/10 bg-brand-cream/95 backdrop-blur-sm md:hidden">
          <div className="container-page flex flex-col gap-4 py-4">
            <ul className="flex flex-col gap-3 text-sm font-medium text-brand-green/90">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-1',
                      activeId === link.id && 'font-semibold text-brand-green',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={nav.cta.href} className="w-full">
              {nav.cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

