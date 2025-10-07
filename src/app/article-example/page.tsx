import { ArticleHeader } from "@/components/ui/article-header"

export default function ArticleExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader
        title="Remote Facility Management: Control Your Operations from Anywhere"
        author={{
          name: "Alex Kowalski",
          initials: "AK"
        }}
        breadcrumb={{
          items: [
            { label: "Blog", href: "/blog" },
            { label: "Cases", href: "/blog/cases" }
          ]
        }}
        tags={{
          niche: "SEO",
          type: "case"
        }}
        readTime="8 mins"
        publishDate="Updated Jan 15, 2025"
      />
    </div>
  )
}