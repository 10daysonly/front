import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Dropdown from ".";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { text: "A select", value: "a" },
  { text: "B select", value: "b" },
];

export const Example: Story = {
  args: {
    value: "a",
    options,
    onChange: () => {},
  },
  decorators: (Story, context) => {
    const [value, setValue] = React.useState("a");

    const modifiedArgs = {
      ...context.args,
      value,
      options,
      onChange: setValue,
    };

    return <Story {...context} args={modifiedArgs} />;
  },
};
