import { cn } from "@/lib/utils"

interface H2Props {
  text: string
  className?: string
}

export function H2({ text, className }: H2Props) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-8", className)}>
      <div className="border-l-4 border-[#D67049] pl-6 md:pl-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-700 leading-relaxed">
          {text}
        </h2>
      </div>
    </div>
  )
}
