import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Image from "./";

import dummyImage from "./imgs/dummyImage.png";

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    src: dummyImage.src,
    width: dummyImage.width,
    height: dummyImage.height,
  },
};

export const PropsSrc = {
  args: {
    src: "https://img.freepik.com/premium-vector/people-profile-icon_24877-40760.jpg?semt=ais_hybrid",
  },
};
