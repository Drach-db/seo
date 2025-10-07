import type { Meta, StoryObj } from '@storybook/react'
import { FAQ } from './faq'

const meta = {
  title: 'UI/FAQ',
  component: FAQ,
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
} satisfies Meta<typeof FAQ>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our platform',
    items: [
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
    ],
    defaultOpenIndex: 0
  },
}