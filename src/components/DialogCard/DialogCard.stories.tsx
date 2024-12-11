import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DialogCard from ".";

import MsgInfo from "@/components/MsgInfo";

const meta = {
  title: "Components/DialogCard",
  component: DialogCard,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => {
      return (
        <div>
          <div style={{ height: "700px" }}></div>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof DialogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ad sed dolores recusandae iure ipsum, dolorem deserunt quam provident! Autem quae, beatae vel sed nisi incidunt in. Ad, ipsam. Ipsam.",
    open: true,
  },
};

export const MsgInfoCase: Story = {
  args: {
    children: <MsgInfo icon="confirm" title="title" subtitle="subtitle" />,
    open: true,
  },
};
