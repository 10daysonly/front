import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Box from "./";

const meta = {
  title: "Components/BoxA",
  component: Box,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat corporis repellendus minus aliquam iure obcaecati itaque, aut sed error illo placeat iste earum, cum quia. Minima recusandae fuga cum!",
  },
};

export const Line: Story = {
  args: {
    line: true,
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat corporis repellendus minus aliquam iure obcaecati itaque, aut sed error illo placeat iste earum, cum quia. Minima recusandae fuga cum!",
  },
};
