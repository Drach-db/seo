"use client"

import { cn } from "@/lib/utils"
import { BookOpen, FileText, Link2, ScrollText, Newspaper, ExternalLink } from "lucide-react"
import { SectionHeader } from "./section-header"

interface Source {
  id: string
  title: string
  description: string
  url?: string
  type?: 'article' | 'research' | 'documentation' | 'news'
  author?: string
  date?: string
}

interface SourcesBlockProps {
  title?: string
  subtitle?: string
  sources: Source[]
  className?: string
}

export function SourcesBlock({
  title = "Google Loves Sites With Sources",
  subtitle = "Citing authoritative sources improves your content credibility and SEO rankings",
  sources,
  className
}: SourcesBlockProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-6xl mx-auto">
          {/* Header using reusable component */}
          <SectionHeader title={title} subtitle={subtitle} />

          {/* Sources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {sources.map((source, index) => (
              <a
                key={source.id}
                href={source.url || '#'}
                className="block bg-white/95 backdrop-blur-sm border-2 border-primary/10 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Source Number */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {source.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-primary/50 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-3">
                      {source.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm">
                      {source.author && (
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-primary/50" />
                          <span className="font-medium text-foreground/60">{source.author}</span>
                        </span>
                      )}
                      {source.date && (
                        <span className="flex items-center gap-1.5">
                          <ScrollText className="w-4 h-4 text-primary/50" />
                          <span className="text-foreground/60">{source.date}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
      </div>
    </section>
  )
}

// Compact version for inline citations
export function SourcesList({
  title = "References",
  sources,
  className
}: Omit<SourcesBlockProps, 'subtitle'>) {
  return (
    <div className={cn("w-full", className)}>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {title}
        </h3>
        <div className="space-y-4">
          {sources.map((source, index) => (
            <div key={source.id} className="flex items-start gap-3">
              <span className="text-primary font-semibold">[{index + 1}]</span>
              <div className="flex-1">
                <p className="text-base md:text-lg text-foreground">
                  <span className="font-medium">{source.title}.</span>{' '}
                  {source.description}
                  {source.author && <span className="text-foreground/60"> — {source.author}</span>}
                  {source.date && <span className="text-foreground/60">, {source.date}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}