import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Text from "./";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Strong: Story = {
  args: {
    children: "text",
  },
};
