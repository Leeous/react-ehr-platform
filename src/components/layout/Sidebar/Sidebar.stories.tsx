import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'], // Generates documentation tab automatically
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Standard default state
export const Default: Story = {
  args: {
    isOpen: true,
  }
};

// Test how your flashing red alert style works on a clinical indicator
// export const CriticalAlert: Story = {
//   args: {
//     label: 'Penicillin Allergy',
//     variant: 'critical',
//   },
// };