import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-brand-green/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green/80',
        className,
      )}
    >
      {children}
    </span>
  )
}

