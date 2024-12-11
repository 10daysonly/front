import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input from "./";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  decorators: [
    (Story, context) => {
      const [value, setValue] = React.useState("");
      const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
      };

      const modifedArgs = { ...context.args, value, onChange: handleChange };

      return <Story {...context} args={modifedArgs} />;
    },
  ],
};

export const Placeholder: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
  },
};

export const Normal: Story = {
  args: {
    variant: "normal",
    placeholder: "normal",
  },
};
