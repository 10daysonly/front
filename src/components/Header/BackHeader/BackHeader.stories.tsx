import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import BackHeader from "./";

const meta = {
  title: "Components/BackHeader",
  component: BackHeader,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BackHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "header",
  },
};
