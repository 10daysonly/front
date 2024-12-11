import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import FormGroup from "./";

import Input from "@/components/Input";

const meta = {
  title: "Components/FormGroup",
  component: FormGroup,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "title",
    children: <Input placeholder="input value" />,
  },
};

export const Required: Story = {
  args: {
    title: "title",
    children: <Input placeholder="input value" />,
    required: true,
  },
};

export const SizeLarge: Story = {
  args: {
    title: "title",
    children: <Input placeholder="input value" />,
    size: "large",
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    title: "title",
    children: <Input placeholder="input value" />,
    size: "large",
  },
};
