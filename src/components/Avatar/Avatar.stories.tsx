import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Avatar from ".";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

import dummyImage2 from "@/components/Image/imgs/dummyImage2.png";

export const Example: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: dummyImage2.src,
    width: dummyImage2.width,
    height: dummyImage2.height,
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    src: dummyImage2.src,
    width: dummyImage2.width,
    height: dummyImage2.height,
  },
};
