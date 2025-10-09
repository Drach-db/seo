import { cn } from "@/lib/utils"

interface H1Props {
  text: string
  className?: string
}

export function H1({ text, className }: H1Props) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <div className="bg-[#D67049] text-white rounded-2xl px-6 py-3 md:px-8 md:py-4 inline-block">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
          {text}
        </h1>
      </div>
    </div>
  )
}
