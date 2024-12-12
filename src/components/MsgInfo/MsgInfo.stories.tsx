import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import MsgInfo from ".";

const meta = {
  title: "Components/MsgInfo",
  component: MsgInfo,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MsgInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confrim: Story = {
  args: {
    title: "title",
    subtitle: "subtitle",
    icon: "confirm",
  },
};

export const Info: Story = {
  args: {
    title: "title",
    subtitle: "subtitle",
    icon: "info",
  },
};
