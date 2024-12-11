import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@/components/Button";

import ButtonBox from "./";

const meta = {
  title: "Components/ButtonBox",
  component: ButtonBox,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: <Button color={`primary`}>btn</Button>,
  },
};
