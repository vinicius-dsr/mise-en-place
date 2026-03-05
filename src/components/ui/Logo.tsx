import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Mise en Place"
      className={cn('h-auto w-20 md:h-auto', className)}
    />
  )
}

