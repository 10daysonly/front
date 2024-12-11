import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import GuestListModal from "./GuestListModal";

const meta = {
  title: "Templates/GuestListModal",
  component: GuestListModal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof GuestListModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
