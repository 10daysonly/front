import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AuthEmailDialog from "./AuthEmailDialog";

const meta = {
  title: "Templates/AuthEmailDialog",
  component: AuthEmailDialog,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthEmailDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
