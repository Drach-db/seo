import { RelatedArticles } from "@/components/ui/related-articles"
import { DecorativeBackground } from "@/components/ui/decorative-background"

const allArticles = [
  {
    id: '1',
    title: 'How to Define Your Unique Selling Proposition',
    description: 'Learn strategies to identify and communicate what makes your business stand out.',
    category: 'Growth Tactics',
    image: 'https://via.placeholder.com/400x300/FFE4B5/FF8C00?text=USP',
    url: '/articles/unique-selling-proposition',
    author: 'Sarah Chen',
    readTime: '5 min',
    date: 'Mar 15, 2024',
  },
  {
    id: '2',
    title: 'The Best Sales Software for Small Businesses Looking to Scale',
    description: 'Compare top CRM and sales tools designed for growing small businesses.',
    category: 'Growth Tactics',
    image: 'https://via.placeholder.com/400x300/E6F3FF/4169E1?text=Sales+Software',
    url: '/articles/sales-software',
    author: 'Michael Ross',
    readTime: '8 min',
    date: 'Mar 14, 2024',
  },
  {
    id: '3',
    title: 'How to Take Your Business from $0 to $10M ARR',
    description: 'Proven strategies and milestones for scaling your revenue.',
    category: 'Growth Tactics',
    image: 'https://via.placeholder.com/400x300/F0E6FF/8B008B?text=Scale+to+10M',
    url: '/articles/scale-to-10m',
    author: 'David Kim',
    readTime: '12 min',
    date: 'Mar 13, 2024',
  },
  {
    id: '4',
    title: 'The B2B Digital Marketing Playbook for Growth on Autopilot',
    description: 'Build automated marketing systems that generate leads.',
    category: 'Growth Tactics',
    image: 'https://via.placeholder.com/400x300/FFE6F0/FF1493?text=B2B+Marketing',
    url: '/articles/b2b-marketing-playbook',
    author: 'Emily Watson',
    readTime: '10 min',
    date: 'Mar 12, 2024',
  },
  {
    id: '5',
    title: 'Core Web Vitals: The Complete Guide',
    description: 'Everything you need to know about Core Web Vitals for better SEO.',
    category: 'SEO',
    image: 'https://via.placeholder.com/400x300/E6FFE6/228B22?text=Core+Vitals',
    url: '/articles/core-web-vitals',
    readTime: '7 min',
  },
  {
    id: '6',
    title: 'Content Strategy That Drives Traffic',
    description: 'Build a content strategy that attracts and converts visitors.',
    category: 'Content',
    image: 'https://via.placeholder.com/400x300/FFE6E6/DC143C?text=Content',
    url: '/articles/content-strategy',
    readTime: '6 min',
  },
  {
    id: '7',
    title: 'Link Building in 2024',
    description: 'Modern link building strategies that actually work.',
    category: 'SEO',
    image: 'https://via.placeholder.com/400x300/F0F8FF/4682B4?text=Links',
    url: '/articles/link-building',
    readTime: '9 min',
  },
  {
    id: '8',
    title: 'Technical SEO Checklist',
    description: 'Complete technical SEO audit checklist for better rankings.',
    category: 'SEO',
    image: 'https://via.placeholder.com/400x300/FFF8DC/DAA520?text=Technical',
    url: '/articles/technical-seo',
    readTime: '11 min',
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Related Articles with Decorative Background */}
      <DecorativeBackground>
        <RelatedArticles
          title="Похожие статьи"
          subtitle="Откройте для себя больше идей и стратегий"
          articles={allArticles}
        />
      </DecorativeBackground>
    </div>
  )
}