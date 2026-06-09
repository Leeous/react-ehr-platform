import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI Elements/Badge',
  component: Badge,
  tags: ['autodocs'], // Generates documentation tab automatically
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Standard default state
export const Default: Story = {
  args: {
    label: 'Active Record',
    variant: 'info',
  },
};

// Test how your flashing red alert style works on a clinical indicator
export const CriticalAlert: Story = {
  args: {
    label: 'Penicillin Allergy',
    variant: 'critical',
  },
};