import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  asChild?: boolean
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green text-brand-cream hover:bg-brand-green/90 shadow-sm',
  outline:
    'border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-cream bg-transparent',
  ghost: 'text-brand-green/80 hover:text-brand-green hover:bg-brand-cream/60',
}

export function Button({ children, variant = 'primary', href, className, ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

