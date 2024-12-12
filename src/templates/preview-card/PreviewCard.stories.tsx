import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PreviewCard from "./";

const meta = {
  title: "Templates/PreviewCard",
  component: PreviewCard,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PreviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
