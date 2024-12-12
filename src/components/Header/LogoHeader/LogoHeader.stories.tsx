import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import LogoHeader from "./";

const meta = {
  title: "Components/LogoHeader",
  component: LogoHeader,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LogoHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "header",
  },
};
