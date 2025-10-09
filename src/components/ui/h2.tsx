import { cn } from "@/lib/utils"

interface H2Props {
  text?: string
  rawHtml?: string
  className?: string
}

export function H2({ text, rawHtml, className }: H2Props) {
  if (rawHtml) {
    return (
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 md:mt-4", className)}>
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
      </div>
    )
  }

  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 md:mt-4", className)}>
      <div className="border-l-3 border-[#D67049] pl-4 md:pl-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-gray-600 leading-relaxed">
          {text}
        </h2>
      </div>
    </div>
  )
}
