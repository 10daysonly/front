import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Onboarding from "./";

const meta = {
  title: "Templates/Onboarding",
  component: Onboarding,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Onboarding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
