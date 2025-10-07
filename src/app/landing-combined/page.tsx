import { DecorativeBackground } from "@/components/ui/decorative-background"
import { ArticleHeader } from "@/components/ui/article-header"
import { FAQ } from "@/components/ui/faq"
import { SourcesBlock } from "@/components/ui/sources-block"
import { RelatedArticles } from "@/components/ui/related-articles"
import { BulletPoints } from "@/components/ui/bullet-points"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

// Sample data
const faqItems = [
  {
    id: '1',
    question: 'What is the Operational Hub and how does it work?',
    answer: 'The Operational Hub is a comprehensive facility management platform that provides real-time control and monitoring of your operations. It integrates IoT sensors, cloud computing, and AI analytics to give you complete visibility over your facilities from anywhere in the world.'
  },
  {
    id: '2',
    question: 'Can I manage multiple facilities from one dashboard?',
    answer: 'Yes! Our platform is designed to handle multiple facilities seamlessly. You can switch between locations, compare metrics across sites, and manage all your properties from a single, unified dashboard.'
  },
  {
    id: '3',
    question: 'What kind of training is required for my team?',
    answer: 'We provide comprehensive onboarding and training programs tailored to your team\'s needs. Most users become proficient with the system within 2-3 days.'
  },
  {
    id: '4',
    question: 'How quickly can I see ROI from implementing the Operational Hub?',
    answer: 'Most of our clients see measurable ROI within 3-6 months. Immediate benefits include reduced response times and improved efficiency.'
  }
]

const sources = [
  {
    id: '1',
    title: 'Real-time IoT Monitoring',
    description: 'Connect and monitor all your IoT devices from a single dashboard',
    icon: '📡',
    url: '/features/iot-monitoring'
  },
  {
    id: '2',
    title: 'Predictive Maintenance',
    description: 'AI-powered predictions to prevent equipment failures',
    icon: '🔧',
    url: '/features/predictive-maintenance'
  },
  {
    id: '3',
    title: 'Energy Optimization',
    description: 'Reduce energy costs with smart consumption analytics',
    icon: '⚡',
    url: '/features/energy-optimization'
  },
  {
    id: '4',
    title: 'Security Integration',
    description: 'Comprehensive security system management',
    icon: '🔒',
    url: '/features/security'
  }
]

const relatedArticles = [
  {
    id: '1',
    title: 'Getting Started with Remote Facility Management',
    description: 'Learn the basics of managing your facilities remotely using modern IoT solutions and cloud-based platforms.',
    image: 'https://via.placeholder.com/320x180',
    url: '/articles/getting-started',
    author: 'Alex Johnson',
    readTime: '5 min read',
    date: 'Dec 15, 2024'
  },
  {
    id: '2',
    title: '10 Ways to Optimize Your Operations',
    description: 'Discover proven strategies to improve efficiency and reduce costs in your facility management workflow.',
    image: 'https://via.placeholder.com/320x180',
    url: '/articles/optimize-operations',
    author: 'Sarah Chen',
    readTime: '8 min read',
    date: 'Dec 12, 2024'
  },
  {
    id: '3',
    title: 'IoT Sensors: A Complete Guide',
    description: 'Everything you need to know about choosing and implementing IoT sensors for facility monitoring.',
    image: 'https://via.placeholder.com/320x180',
    url: '/articles/iot-sensors-guide',
    author: 'Mike Davis',
    readTime: '12 min read',
    date: 'Dec 10, 2024'
  },
  {
    id: '4',
    title: 'Predictive Maintenance Best Practices',
    description: 'How to implement predictive maintenance strategies that actually work and save money.',
    image: 'https://via.placeholder.com/320x180',
    url: '/articles/predictive-maintenance',
    author: 'Lisa Wang',
    readTime: '10 min read',
    date: 'Dec 8, 2024'
  }
]

const bulletPoints = [
  {
    id: '1',
    icon: '🎯',
    title: 'Real-time Monitoring',
    description: 'Track all facility metrics and KPIs in real-time from anywhere'
  },
  {
    id: '2',
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics and insights'
  },
  {
    id: '3',
    icon: '🔔',
    title: 'Smart Alerts',
    description: 'Receive instant notifications about critical events and anomalies'
  },
  {
    id: '4',
    icon: '🛠️',
    title: 'Automated Workflows',
    description: 'Streamline operations with intelligent automation and scheduling'
  },
  {
    id: '5',
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance for your peace of mind'
  }
]

export default function LandingCombinedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section with Article Header */}
      <ArticleHeader
        title="Welcome to Operational Hub: The Future of Facility Management"
        author={{ name: "Alex Kowalski", initials: "AK" }}
        breadcrumb={{
          items: [
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" }
          ]
        }}
        tags={{ niche: "IoT", type: "case" }}
        readTime="8 mins"
        publishDate="January 15, 2025"
      />

      {/* Key Features Section */}
      <DecorativeBackground className="py-16 md:py-20">
        <Container>
          <BulletPoints
            title="Why Choose Operational Hub"
            subtitle="Transform your facility management with cutting-edge technology"
            items={bulletPoints}
          />
        </Container>
      </DecorativeBackground>

      {/* Sources/Resources Section */}
      <DecorativeBackground className="py-16 md:py-20">
        <Container>
          <SourcesBlock
            title="Explore Our Features"
            subtitle="Discover powerful tools for modern facility management"
            sources={sources}
          />
        </Container>
      </DecorativeBackground>

      {/* Related Articles Section */}
      <DecorativeBackground className="py-16 md:py-20">
        <Container>
          <RelatedArticles
            title="Learn More"
            subtitle="Dive deeper into facility management best practices"
            articles={relatedArticles}
          />
        </Container>
      </DecorativeBackground>

      {/* FAQ Section */}
      <DecorativeBackground className="py-16 md:py-20">
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our platform"
          items={faqItems}
          defaultOpenIndex={0}
        />
      </DecorativeBackground>

      {/* Footer */}
      <Footer />
    </div>
  )
}