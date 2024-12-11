import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InviteCard from "./";

const meta = {
  title: "Templates/InviteCard",
  component: InviteCard,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InviteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
