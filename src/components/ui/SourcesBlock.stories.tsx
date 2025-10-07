import type { Meta, StoryObj } from '@storybook/react'
import { SourcesBlock } from './sources-block'

const meta = {
  title: 'UI/SourcesBlock',
  component: SourcesBlock,
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
} satisfies Meta<typeof SourcesBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Google Loves Sites With Sources',
    subtitle: 'Citing authoritative sources improves your content credibility and SEO rankings',
    sources: [
      {
        id: '1',
        title: 'Google Search Quality Guidelines',
        description: 'Official guidelines from Google on what makes quality content that ranks well in search results.',
        author: 'Google Search Central',
        date: '2024',
        url: '#',
        type: 'documentation' as const,
      },
      {
        id: '2',
        title: 'E-A-T and Your YMYL Pages',
        description: 'Understanding how Expertise, Authoritativeness, and Trustworthiness impact your content rankings.',
        author: 'Search Engine Journal',
        date: 'March 2024',
        url: '#',
        type: 'article' as const,
      },
      {
        id: '3',
        title: 'Core Web Vitals Study',
        description: 'Research showing how page speed and user experience metrics correlate with higher search rankings.',
        author: 'Web.dev Team',
        date: '2024',
        url: '#',
        type: 'research' as const,
      },
      {
        id: '4',
        title: 'Content Authority Signals',
        description: 'How citing credible sources and building topical authority improves your SEO performance.',
        author: 'Moz Research',
        date: 'February 2024',
        url: '#',
        type: 'research' as const,
      },
    ],
  },
}