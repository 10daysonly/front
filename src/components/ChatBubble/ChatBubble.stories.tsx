import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ChatBubble from ".";
import Avatar from "@/components/Avatar";

const meta = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt sed odio, nihil alias asperiores ipsam labore delectus beatae aspernatur veritatis dolorem consectetur. Obcaecati illo tempore cum, ratione quaerat quidem!",
    avatar: <Avatar color="reverse" />,
    time: "13:40",
    actions: <></>,
  },
};

export const Right: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt sed odio, nihil alias asperiores ipsam labore delectus beatae aspernatur veritatis dolorem consectetur. Obcaecati illo tempore cum, ratione quaerat quidem!",
    direction: "right",
    avatar: <Avatar color="reverse" />,
    time: "13:40",
    actions: <></>,
  },
};
