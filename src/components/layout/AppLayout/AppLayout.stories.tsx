import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { AppLayout } from './AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  tags: ['autodocs'], // Generates documentation tab automatically
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

// Standard default state
export const Default: Story = {
  args: {
    children: "AppLayout",
  },
};

// Test how your flashing red alert style works on a clinical indicator
// export const CriticalAlert: Story = {
//   args: {
//     label: 'Penicillin Allergy',
//     variant: 'critical',
//   },
// };