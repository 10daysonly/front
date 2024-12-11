import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Icon from ".";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { icon: "back" },
};
