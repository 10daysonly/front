import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./";

import Icon from "@/components/Icon";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "btn",
  },
};

export const Disabled: Story = {
  args: {
    children: "btn",
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    children: "primary",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "secondary",
    color: "secondary",
  },
};

export const Info: Story = {
  args: {
    children: "info",
    color: "info",
  },
};

export const InfoReverse: Story = {
  args: {
    children: "info-reverse",
    color: "info-reverse",
  },
};

export const Active: Story = {
  args: {
    children: "active",
    color: "active",
  },
};

export const BlockTrue: Story = {
  args: {
    children: "btn",
    color: "primary",
    block: true,
  },
};

export const SizeDefault: Story = {
  args: {
    children: "secondary",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "large",
  },
};

export const SizeSmall: Story = {
  args: {
    children: "small",
    size: "small",
    color: "primary",
  },
};

export const IconStart: Story = {
  args: {
    children: "btn",
    color: "primary",
    icon: <Icon icon="camera" />,
    iconPosition: "start",
  },
};

export const IconEnd: Story = {
  args: {
    children: "btn",
    color: "primary",
    icon: <Icon icon="camera" />,
    iconPosition: "end",
  },
};
