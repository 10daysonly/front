import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Layout from "./";

const meta = {
  title: "Components/Layout",
  component: Layout,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "layout content",
  },
};
