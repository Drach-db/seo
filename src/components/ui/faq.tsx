"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "./section-header"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  className?: string
  defaultOpenIndex?: number
  allowMultiple?: boolean
}

export function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services",
  items,
  className,
  defaultOpenIndex,
  allowMultiple = false
}: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    defaultOpenIndex !== undefined ? new Set([items[defaultOpenIndex]?.id]) : new Set()
  )

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(itemId)
      }
      return newSet
    })
  }

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-6xl mx-auto">
          {/* Header using reusable component */}
          <SectionHeader title={title} subtitle={subtitle} />

          {/* FAQ Items */}
          <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
              {items.map((item) => {
                const isOpen = openItems.has(item.id)
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "border rounded-xl transition-all duration-300",
                      isOpen
                        ? "border-primary/30 bg-primary/5 shadow-md"
                        : "border-border bg-background hover:border-primary/20 hover:shadow-sm"
                    )}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 md:py-5 text-left flex items-center justify-between gap-4 transition-colors"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-foreground pr-2">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="px-6 pb-4 md:pb-5 pt-0">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </section>
  )
}