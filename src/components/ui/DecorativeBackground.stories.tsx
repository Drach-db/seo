import type { Meta, StoryObj } from '@storybook/react'
import { DecorativeBackground } from './decorative-background'

const meta = {
  title: 'UI/DecorativeBackground',
  component: DecorativeBackground,
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
} satisfies Meta<typeof DecorativeBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showCircles: true,
    showStars: true,
    showWaves: true,
    showDots: true,
    children: (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4 p-8">
          <div className="inline-block bg-gradient-to-r from-primary via-primary to-[hsl(20_85%_60%)] rounded-2xl px-8 py-4">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Decorative Background
            </h1>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-lg text-muted-foreground">With all decorative elements enabled</p>
          </div>
        </div>
      </div>
    ),
  },
}