import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'], // Generates documentation tab automatically
};

export default meta;
type Story = StoryObj<typeof Header>;

// Standard default state
export const Default: Story = {
  args: {
    title: "Header"
  }
};

// Test how your flashing red alert style works on a clinical indicator
// export const CriticalAlert: Story = {
//   args: {
//     label: 'Penicillin Allergy',
//     variant: 'critical',
//   },
// };