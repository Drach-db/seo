import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from '@/components/ui/h1';
import { H2 } from '@/components/ui/h2';
import { DecorativeBackground } from '@/components/ui/decorative-background';

const HeadingGroup = () => (
  <DecorativeBackground className="py-16 md:py-20 lg:py-24">
    <H1 text="Why Choose Operational Hub" />
    <H2 text="Transform your facility management with cutting-edge technology" />
  </DecorativeBackground>
);

const meta = {
  title: 'UI/Heading Group',
  component: HeadingGroup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeadingGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
