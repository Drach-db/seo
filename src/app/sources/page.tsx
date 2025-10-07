import { SourcesBlock } from "@/components/ui/sources-block"
import { DecorativeBackground } from "@/components/ui/decorative-background"

const mainSources = [
  {
    id: '1',
    title: 'Google Search Quality Guidelines',
    description: 'Official documentation explaining how Google evaluates content quality and what signals matter most for ranking.',
    author: 'Google Search Central',
    date: 'Updated 2024',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  },
  {
    id: '2',
    title: 'E-A-T Guidelines Research',
    description: 'Comprehensive study on how Expertise, Authoritativeness, and Trustworthiness impact search rankings and user trust.',
    author: 'Search Engine Journal',
    date: 'March 2024',
    url: '#',
  },
  {
    id: '3',
    title: 'Core Web Vitals Impact Study',
    description: 'Data-driven research showing correlation between page performance metrics and search visibility.',
    author: 'Web.dev Team',
    date: '2024',
    url: '#',
  },
  {
    id: '4',
    title: 'Content Authority Signals',
    description: 'Analysis of how citing credible sources and building topical authority improves organic performance.',
    author: 'Moz Research Lab',
    date: 'February 2024',
    url: '#',
  },
  {
    id: '5',
    title: 'YMYL Content Best Practices',
    description: 'Guidelines for creating trustworthy content in Your Money or Your Life categories.',
    author: 'Google Quality Raters',
    date: '2024',
    url: '#',
  },
  {
    id: '6',
    title: 'Semantic Search Evolution',
    description: 'How modern search engines understand context and entity relationships in content.',
    author: 'Bing Webmaster Blog',
    date: 'January 2024',
    url: '#',
  },
]

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Sources Block with Decorative Background */}
      <DecorativeBackground>
        <SourcesBlock
          title="Google Loves Sites With Sources"
          subtitle="Citing authoritative sources improves your content credibility and SEO rankings"
          sources={mainSources}
        />
      </DecorativeBackground>
    </div>
  )
}