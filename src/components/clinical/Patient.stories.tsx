import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import Patient from './Patient';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Patient> = {
  title: 'UI elements/Patient',
  component: Patient,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  argTypes: {
    id: { control: { type: 'number' } },
    firstName: { control: { type: 'text' } },
    lastName: { control: { type: 'text' } },
    age: { control: { type: 'number' } },
    email: { control: { type: 'text' }}
  },
};

export default meta;
type Story = StoryObj<typeof Patient>;

// Standard default state
export const Default: Story = {
  args: {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 27,
    email: "example@example.com"
  },
};