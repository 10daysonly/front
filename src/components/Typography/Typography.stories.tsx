import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Typography from "./";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    children: "title",
  },
};
