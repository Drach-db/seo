import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from './section-header'

const meta = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
        wide: { name: 'Desktop XL', styles: { width: '1920px', height: '1080px' } },
      },
    },
  },
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Platform Features',
    subtitle: 'Everything you need to control your operations',
  },
}