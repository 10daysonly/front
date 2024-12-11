import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InviteRoom from ".";

const meta = {
  title: "Templates/InviteRoom",
  component: InviteRoom,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InviteRoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
