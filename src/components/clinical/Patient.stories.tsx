import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import Patient from './Patient';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Patient> = {
  title: 'UI elements/Patient',
  component: Patient,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  argTypes: {
    id: { control: { type: 'text' } },
    name: { control: { type: 'object' } },
    age: { control: { type: 'number' } },
    email: { control: { type: 'text' }}
  },
};

export default meta;
type Story = StoryObj<typeof Patient>;

// Standard default state
export const Default: Story = {
  args: {
    id: "123abc",
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    dob: "1999-02-24",
    age: 25,
    email: "example@example.com",
    status: "active"
  },
};