import { cn } from "@/lib/utils"
import { LucideIcon, Check, ArrowRight, Star, Shield, Zap, Target, Trophy, Heart } from "lucide-react"
import { SectionHeader } from "./section-header"

interface BulletPoint {
  id: string
  title: string
  description?: string
  icon?: LucideIcon | string
}

interface BulletPointsProps {
  title: string
  subtitle?: string
  items: BulletPoint[]
  defaultIcon?: LucideIcon
  iconColor?: string
  columns?: 1 | 2 | 3
  className?: string
}

// Default icon set for easy selection
export const BulletIcons = {
  check: Check,
  arrow: ArrowRight,
  star: Star,
  shield: Shield,
  zap: Zap,
  target: Target,
  trophy: Trophy,
  heart: Heart,
} as const

export function BulletPoints({
  title,
  subtitle,
  items,
  defaultIcon = Check,
  iconColor = "text-primary",
  columns = 2,
  className
}: BulletPointsProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }[columns]

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Use SectionHeader component for consistency */}
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Bullet Points Grid */}
        <div className={cn("grid gap-6 md:gap-8", gridClass)}>
          {items.map((item) => {
            const IconComponent = item.icon || defaultIcon
            const isEmoji = typeof item.icon === 'string'

            return (
              <div
                key={item.id}
                className="group flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors",
                  isEmoji ? "" : iconColor
                )}>
                  {isEmoji ? (
                    <span className="text-2xl">{item.icon}</span>
                  ) : (
                    <IconComponent className="w-6 h-6" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Compact version for simpler lists
export function BulletPointsCompact({
  title,
  subtitle,
  items,
  defaultIcon = Check,
  iconColor = "text-primary",
  className
}: Omit<BulletPointsProps, 'columns'>) {
  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Use SectionHeader component for consistency */}
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Compact List */}
        <div className="space-y-4">
          {items.map((item) => {
            const IconComponent = item.icon || defaultIcon
            const isEmoji = typeof item.icon === 'string'

            return (
              <div key={item.id} className="flex items-start gap-3">
                <div className={cn("mt-1", isEmoji ? "" : iconColor)}>
                  {isEmoji ? (
                    <span className="text-lg">{item.icon}</span>
                  ) : (
                    <IconComponent className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Simple version for basic lists
export function BulletPointsSimple({
  items,
  defaultIcon = Check,
  iconColor = "text-primary",
  className
}: Pick<BulletPointsProps, 'items' | 'defaultIcon' | 'iconColor' | 'className'>) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const IconComponent = item.icon || defaultIcon
        const isEmoji = typeof item.icon === 'string'

        return (
          <div key={item.id} className="flex items-start gap-2">
            <div className={cn("mt-0.5", isEmoji ? "" : iconColor)}>
              {isEmoji ? (
                <span className="text-sm">{item.icon}</span>
              ) : (
                <IconComponent className="w-4 h-4" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base text-foreground">
                <span className="font-medium">{item.title}</span>
                {item.description && (
                  <span className="text-muted-foreground"> — {item.description}</span>
                )}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}