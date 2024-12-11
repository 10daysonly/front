import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Main from "./";

const meta = {
  title: "Components/Main",
  component: Main,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "main content",
  },
};
