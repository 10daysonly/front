import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Textarea from "./";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [value, setValue] = React.useState("");
      const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
      };
      return <Story value={value} onChange={handleChange} />;
    },
  ],
};
