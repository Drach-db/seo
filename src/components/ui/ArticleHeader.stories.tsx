import type { Meta, StoryObj } from '@storybook/react'
import { ArticleHeader } from './article-header'

const meta = {
  title: 'UI/ArticleHeader',
  component: ArticleHeader,
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
} satisfies Meta<typeof ArticleHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Remote Facility Management: Control Your Operations from Anywhere',
    author: {
      name: 'Alex Kowalski',
      initials: 'AK'
    },
    breadcrumb: {
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Cases', href: '/blog/cases' }
      ]
    },
    tags: {
      niche: 'SEO',
      type: 'case'
    },
    readTime: '8 mins',
    publishDate: 'January 15, 2025'
  },
}