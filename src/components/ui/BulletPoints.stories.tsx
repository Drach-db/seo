import type { Meta, StoryObj } from '@storybook/react'
import { BulletPoints } from './bullet-points'

const meta = {
  title: 'UI/BulletPoints',
  component: BulletPoints,
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
} satisfies Meta<typeof BulletPoints>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Why Choose Operational Hub',
    subtitle: 'Transform your facility management with cutting-edge technology',
    items: [
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
    ],
    columns: 2
  },
}