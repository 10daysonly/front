import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Tabs from "./";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyItems = [
  {
    key: "a",
    label: "A",
    children: "content A",
  },
  {
    key: "b",
    label: "B",
    children: "content B",
  },
];

export const Example: Story = {
  args: {
    items: dummyItems,
  },
  decorators: [
    (Story, context) => {
      const [activeKey, setActiveKey] = React.useState("a");
      const modifiedArgs = {
        ...context.args,
        activeKey,
        onChange: setActiveKey,
      };
      return <Story {...context} args={modifiedArgs} />;
    },
  ],
};
