import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from '@/components/ui/h1';

const meta = {
  title: 'UI/H1',
  component: H1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Why Choose Operational Hub',
  },
};

export const LongText: Story = {
  args: {
    text: 'Transform your facility management with cutting-edge technology',
  },
};

export const WithBackground: Story = {
  args: {
    text: 'Why Choose Operational Hub',
  },
  decorators: [
    (Story) => (
      <div className="bg-background py-16">
        <Story />
      </div>
    ),
  ],
};
