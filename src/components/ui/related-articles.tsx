"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, Clock, User, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { SectionHeader } from "./section-header"

interface Article {
  id: string
  title: string
  description?: string
  category: string
  image: string
  url: string
  author?: string
  readTime?: string
  date?: string
}

interface RelatedArticlesProps {
  title?: string
  subtitle?: string
  articles: Article[]
  className?: string
}

export function RelatedArticles({
  title = "Related Articles",
  subtitle = "Discover more insights and strategies",
  articles,
  className
}: RelatedArticlesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // width of one card
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })

      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-7xl mx-auto">
          {/* Header using reusable component */}
          <SectionHeader title={title} subtitle={subtitle} />

          {/* Articles Carousel */}
          <div className="relative">
            {/* Left Button */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            )}

            {/* Right Button */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollButtons}
              className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={article.url}
                  className="group flex-shrink-0 w-[280px] md:w-[320px] block bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-primary/5 hover:border-primary/20"
                >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
                      {article.category}
                    </span>
                  </div>
                  {/* Hover Arrow */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {article.description && (
                    <p className="text-sm md:text-base text-foreground/70 mb-3 line-clamp-2">
                      {article.description}
                    </p>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-xs text-foreground/50">
                    {article.author && (
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </span>
                    )}
                    {article.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    )}
                    {article.date && !article.author && !article.readTime && (
                      <span>{article.date}</span>
                    )}
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}