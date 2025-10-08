import { cn } from "@/lib/utils"
import { DecorativeBackground } from "./decorative-background"

interface H2Props {
  text: string
  className?: string
  showCircles?: boolean
  showStars?: boolean
  showWaves?: boolean
  showDots?: boolean
}

export function H2({
  text,
  className,
  showCircles = true,
  showStars = true,
  showWaves = true,
  showDots = true,
}: H2Props) {
  return (
    <DecorativeBackground
      className={cn("py-10 md:py-12 lg:py-16", className)}
      showCircles={showCircles}
      showStars={showStars}
      showWaves={showWaves}
      showDots={showDots}
      showTopWave={false}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          {text}
        </h2>
      </div>
    </DecorativeBackground>
  )
}
