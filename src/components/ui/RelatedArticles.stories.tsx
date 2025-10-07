import type { Meta, StoryObj } from '@storybook/react'
import { RelatedArticles } from './related-articles'

const meta = {
  title: 'UI/RelatedArticles',
  component: RelatedArticles,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
        wide: { name: 'Desktop XL', styles: { width: '1920px', height: '1080px' } },
      },
    },
  },
} satisfies Meta<typeof RelatedArticles>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Related Articles',
    subtitle: 'Explore more insights and best practices',
    articles: [
      {
        id: '1',
        title: 'Getting Started with Remote Facility Management',
        description: 'Learn the basics of managing your facilities remotely using modern IoT solutions.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/getting-started',
        author: 'Alex Johnson',
        readTime: '5 min read',
        date: 'Dec 15, 2024'
      },
      {
        id: '2',
        title: '10 Ways to Optimize Your Operations',
        description: 'Discover proven strategies to improve efficiency and reduce costs.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/optimize-operations',
        author: 'Sarah Chen',
        readTime: '8 min read',
        date: 'Dec 12, 2024'
      },
      {
        id: '3',
        title: 'IoT Sensors: A Complete Guide',
        description: 'Everything you need to know about choosing and implementing IoT sensors.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/iot-sensors',
        author: 'Mike Davis',
        readTime: '12 min read',
        date: 'Dec 10, 2024'
      },
      {
        id: '4',
        title: 'Predictive Maintenance Best Practices',
        description: 'How to implement predictive maintenance strategies that actually work.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/predictive-maintenance',
        author: 'Lisa Wang',
        readTime: '10 min read',
        date: 'Dec 8, 2024'
      },
      {
        id: '5',
        title: 'Energy Efficiency Tips',
        description: 'Save costs and reduce carbon footprint with smart energy management.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/energy-efficiency',
        author: 'Tom Brown',
        readTime: '7 min read',
        date: 'Dec 5, 2024'
      },
      {
        id: '6',
        title: 'Security Best Practices',
        description: 'Keep your facilities secure with modern security protocols.',
        image: 'https://via.placeholder.com/320x180',
        url: '/articles/security-practices',
        author: 'Emma Wilson',
        readTime: '9 min read',
        date: 'Dec 3, 2024'
      }
    ]
  },
}