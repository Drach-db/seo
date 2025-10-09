import type { Meta, StoryObj } from '@storybook/react';
import { H2 } from '@/components/ui/h2';

const meta = {
  title: 'UI/H2',
  component: H2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Transform your facility management with cutting-edge technology',
  },
};

export const ShortText: Story = {
  args: {
    text: 'Key Benefits',
  },
};

export const WithBackground: Story = {
  args: {
    text: 'Transform your facility management with cutting-edge technology',
  },
  decorators: [
    (Story) => (
      <div className="bg-background py-16">
        <Story />
      </div>
    ),
  ],
};
