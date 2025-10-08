import { cn } from "@/lib/utils"
import { DecorativeBackground } from "./decorative-background"

interface H1Props {
  text: string
  className?: string
  showCircles?: boolean
  showStars?: boolean
  showWaves?: boolean
  showDots?: boolean
}

export function H1({
  text,
  className,
  showCircles = true,
  showStars = true,
  showWaves = true,
  showDots = true,
}: H1Props) {
  return (
    <DecorativeBackground
      className={cn("py-12 md:py-16 lg:py-20", className)}
      showCircles={showCircles}
      showStars={showStars}
      showWaves={showWaves}
      showDots={showDots}
      showTopWave={false}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          {text}
        </h1>
      </div>
    </DecorativeBackground>
  )
}
