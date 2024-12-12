import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AuthSuccess from ".";

const meta = {
  title: "Templates/AuthSuccess",
  component: AuthSuccess,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
