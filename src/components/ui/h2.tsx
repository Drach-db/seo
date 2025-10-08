import { cn } from "@/lib/utils"

interface H2Props {
  text: string
  className?: string
}

export function H2({ text, className }: H2Props) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
        {text}
      </h2>
    </div>
  )
}
