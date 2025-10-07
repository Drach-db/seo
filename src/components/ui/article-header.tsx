import { cn } from "@/lib/utils"
import { Clock, Calendar, ChevronRight, Hash, FileText, Briefcase } from "lucide-react"
import Link from "next/link"

interface ArticleHeaderProps {
  title: string
  author: {
    name: string
    initials?: string
    avatar?: string
  }
  breadcrumb?: {
    items: { label: string; href: string }[]
  }
  tags?: {
    niche?: string // e.g., "SEO", "Marketing", "Sales"
    type?: "article" | "case" // Article or Case Study
  }
  readTime: string
  publishDate: string
  className?: string
}

export function ArticleHeader({
  title,
  author,
  breadcrumb = {
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Cases", href: "/blog/cases" }
    ]
  },
  tags = {
    niche: "SEO",
    type: "case"
  },
  readTime,
  publishDate,
  className
}: ArticleHeaderProps) {
  return (
    <header className={cn("w-full bg-slate-900 relative overflow-hidden pt-20 md:pt-24 lg:pt-28 pb-16", className)}>
      {/* Decorative Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - top left */}
        <div className="absolute -top-16 -left-16 w-48 h-48 md:w-64 md:h-64 border-2 border-[#398D8D]/60 rounded-full" />

        {/* Medium Circle - bottom right */}
        <div className="absolute -bottom-12 -right-12 w-40 h-40 md:w-56 md:h-56 border-2 border-[#398D8D]/50 rounded-full" />

        {/* Small Circle - mid right */}
        <div className="absolute top-1/3 right-[5%] w-24 h-24 border border-[#398D8D]/45 rounded-full hidden md:block" />

        {/* Stars */}
        <div className="absolute top-[10%] right-[15%] text-[#398D8D]/70">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] left-[10%] text-[#398D8D]/60 rotate-45 hidden md:block">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
          </svg>
        </div>
        <div className="absolute top-[60%] right-[30%] text-[#398D8D]/50 -rotate-12">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
          </svg>
        </div>

        {/* Dot Grids */}
        <div className="absolute top-[40%] left-[5%] opacity-70 hidden lg:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#398D8D]/70" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[25%] opacity-60 rotate-12">
          <div className="grid grid-cols-2 gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#398D8D]/65" />
            ))}
          </div>
        </div>

        {/* Additional decorative lines */}
        <div className="absolute top-[20%] left-[50%] w-32 h-0.5 bg-gradient-to-r from-transparent via-[#398D8D]/60 to-transparent hidden lg:block" />
        <div className="absolute bottom-[35%] right-[40%] w-24 h-0.5 bg-gradient-to-r from-transparent via-[#398D8D]/50 to-transparent rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.items.length > 0 && (
            <nav className="flex items-center gap-2 text-sm">
              {breadcrumb.items.map((item, index) => (
                <div key={item.href} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                  {index < breadcrumb.items.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Author and Meta Info */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Author Avatar and Name */}
            <div className="flex items-center gap-3">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base bg-[#398D8D]">
                  {author.initials || author.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                </div>
              )}
              <span className="font-semibold text-white">{author.name}</span>
            </div>

            {/* Tags */}
            {tags && (
              <>
                {tags.niche && (
                  <Link
                    href={`/blog/niche/${tags.niche.toLowerCase()}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#398D8D]/20 to-[#398D8D]/15 text-[#398D8D] hover:from-[#398D8D]/30 hover:to-[#398D8D]/25 transition-all border border-[#398D8D]/30"
                    title={`Niche: ${tags.niche}`}
                  >
                    <Hash className="w-3 h-3" />
                    <span className="uppercase">{tags.niche}</span>
                  </Link>
                )}
                {tags.type && (
                  <Link
                    href={`/blog/${tags.type}s`}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors",
                      tags.type === 'case'
                        ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-400/30"
                        : "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-400/30"
                    )}
                  >
                    {tags.type === 'case' ? (
                      <Briefcase className="w-3 h-3" />
                    ) : (
                      <FileText className="w-3 h-3" />
                    )}
                    {tags.type === 'case' ? 'Case Study' : 'Article'}
                  </Link>
                )}
              </>
            )}

            {/* Read Time */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{readTime}</span>
            </div>

            {/* Publish Date */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{publishDate}</span>
            </div>
          </div>
      </div>

      {/* Bottom Wave Separator - Dark theme */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg className="w-full" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 30 L240 15 L480 45 L720 20 L960 40 L1200 10 L1440 35 L1440 60 L0 60 Z" fill="#398D8D" fillOpacity="0.6"/>
        </svg>
      </div>
    </header>
  )
}

// Simplified version without breadcrumb
export function ArticleHeaderSimple({
  title,
  author,
  tags,
  readTime,
  publishDate,
  className
}: Omit<ArticleHeaderProps, 'breadcrumb'>) {
  return (
    <header className={cn("w-full bg-slate-900 relative overflow-hidden pt-20 md:pt-24 lg:pt-28 pb-16", className)}>
      {/* Decorative Geometric Elements - Simplified */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circles */}
        <div className="absolute -top-12 -left-12 w-36 h-36 md:w-48 md:h-48 border-2 border-[#398D8D]/55 rounded-full" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 border border-[#398D8D]/50 rounded-full" />

        {/* Stars */}
        <div className="absolute top-[15%] right-[10%] text-[#398D8D]/65">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-[30%] left-[8%] text-[#398D8D]/55 rotate-45">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
          </svg>
        </div>

        {/* Dots */}
        <div className="absolute top-[50%] right-[20%] opacity-60">
          <div className="grid grid-cols-2 gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#398D8D]/65" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#398D8D]">
                {author.initials || author.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
            )}
            <span className="font-semibold text-white">{author.name}</span>
          </div>

          {/* Tags */}
          {tags && (
            <>
              {tags.niche && (
                <Link
                  href={`/blog/niche/${tags.niche.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#398D8D]/20 to-[#398D8D]/15 text-[#398D8D] hover:from-[#398D8D]/30 hover:to-[#398D8D]/25 transition-all border border-[#398D8D]/30"
                  title={`Niche: ${tags.niche}`}
                >
                  <Hash className="w-3 h-3" />
                  <span className="uppercase">{tags.niche}</span>
                </Link>
              )}
              {tags.type && (
                <Link
                  href={`/blog/${tags.type}s`}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors",
                    tags.type === 'case'
                      ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-400/30"
                      : "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-400/30"
                  )}
                >
                  {tags.type === 'case' ? (
                    <Briefcase className="w-3 h-3" />
                  ) : (
                    <FileText className="w-3 h-3" />
                  )}
                  {tags.type === 'case' ? 'Case Study' : 'Article'}
                </Link>
              )}
            </>
          )}

          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{readTime}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{publishDate}</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator - Dark theme */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg className="w-full" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 30 L240 15 L480 45 L720 20 L960 40 L1200 10 L1440 35 L1440 60 L0 60 Z" fill="#398D8D" fillOpacity="0.6"/>
        </svg>
      </div>
    </header>
  )
}