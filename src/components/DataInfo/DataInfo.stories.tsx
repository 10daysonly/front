import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DataInfo from ".";

import Icon from "@/components/Icon";

const meta = {
  title: "Components/DataInfo",
  component: DataInfo,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DataInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    icon: <Icon icon="calendarLarge" />,
    title: "Date",
    children: "12.22 monday",
  },
};
