import { cn } from "@/lib/utils"

interface H2Props {
  text?: string
  rawHtml?: string
  className?: string
}

export function H2({ text = '', rawHtml, className }: H2Props) {
  let displayText = text;

  if (rawHtml) {
    // Пытаемся извлечь текст из microdata
    const microdataMatch = rawHtml.match(/itemprop="text"[^>]*>([^<]+)</i);
    if (microdataMatch) {
      displayText = microdataMatch[1].trim();
    } else {
      // Если microdata нет, используем rawHtml как обычный текст
      // Удаляем HTML теги, если они есть
      displayText = rawHtml.replace(/<[^>]+>/g, '').trim();
    }
  }

  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 md:mt-4 mb-6", className)}>
      <div className="border-l-3 border-[#D67049] pl-4 md:pl-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-gray-600 leading-relaxed">
          {displayText}
        </h2>
      </div>
    </div>
  )
}
