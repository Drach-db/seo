import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  noPadding?: boolean
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
}

export function Container({
  children,
  className,
  size = 'lg',
  noPadding = false
}: ContainerProps) {
  return (
    <div className={cn(
      "container mx-auto",
      !noPadding && "px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}

// Специальная обертка для секций с единообразными отступами
interface SectionContainerProps extends ContainerProps {
  as?: 'section' | 'div' | 'article'
}

export function SectionContainer({
  children,
  className,
  size = 'lg',
  as: Component = 'section',
  noPadding = false
}: SectionContainerProps) {
  return (
    <Component className={cn("w-full", !noPadding && "py-12 md:py-16 lg:py-20", className)}>
      <Container size={size} noPadding={noPadding}>
        {children}
      </Container>
    </Component>
  )
}