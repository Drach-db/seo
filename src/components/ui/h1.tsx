import { cn } from "@/lib/utils"

interface H1Props {
  text?: string
  rawHtml?: string
  className?: string
}

export function H1({ text = '', rawHtml, className }: H1Props) {
  if (rawHtml) {
    // Извлекаем текст из microdata
    const match = rawHtml.match(/itemprop="headline"[^>]*>([^<]+)</i);
    if (match) text = match[1].trim();
  }

  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <div className="bg-[#D67049] text-white rounded-2xl px-4 py-2 md:px-6 md:py-2.5 inline-block">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
          {text}
        </h1>
      </div>
    </div>
  )
}
