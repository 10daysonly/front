import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AuthEmail from "./";

const meta = {
  title: "Templates/AuthEmail",
  component: AuthEmail,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
