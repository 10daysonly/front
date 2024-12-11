import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Header from "./";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "header",
  },
};
