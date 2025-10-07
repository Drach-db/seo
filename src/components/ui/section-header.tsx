import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={cn("inline-block bg-gradient-to-r from-primary via-primary to-[hsl(20_85%_60%)] rounded-2xl py-2.5 md:py-3 pl-4 pr-6 md:pr-8", className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground tracking-tight">
        {children}
      </h2>
    </div>
  )
}

interface SectionSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <div className={cn("border-l-4 border-primary pl-4", className)}>
      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
        {children}
      </p>
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 md:mb-12 space-y-3", className)}>
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    </header>
  )
}