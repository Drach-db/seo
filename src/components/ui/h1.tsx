import { cn } from "@/lib/utils"

interface H1Props {
  text: string
  className?: string
}

export function H1({ text, className }: H1Props) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <div className="bg-[#D67049] text-white rounded-[32px] px-8 py-6 md:px-12 md:py-8 inline-block">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {text}
        </h1>
      </div>
    </div>
  )
}
