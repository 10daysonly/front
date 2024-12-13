import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import GNB from ".";

const meta = {
  title: "Components/GNB",
  component: GNB,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof GNB>;

export default meta;
type Story = StoryObj<typeof meta>;

const menus: {
  text: React.ReactNode;
  icon: "edit" | "share" | "invite" | "delete";
  onClick: Function;
}[] = [
  {
    text: "수정하기",
    onClick: () => {},
    icon: "edit",
  },
  {
    text: "URL 공유하기",
    onClick: () => {},
    icon: "share",
  },
  {
    text: "초대하기",
    onClick: () => {},
    icon: "invite",
  },
  {
    text: "삭제하기",
    onClick: () => {},
    icon: "delete",
  },
];

export const Example: Story = {
  args: {
    active: "edit",
    menus,
  },
  decorators: (Story, context) => {
    return (
      <div>
        <div style={{ height: "150px" }}></div>
        <Story {...context} />
      </div>
    );
  },
};
