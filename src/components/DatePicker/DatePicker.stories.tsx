import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DatePicker from ".";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
  },
  decorators: (Story, context) => {
    const [value, setValue] = React.useState(new Date());
    const handleChange = (value: Date) => {
      console.log("value", value);
      setValue(value);
    };

    return <Story {...context} args={{ ...context.args, value, onChange: handleChange }} />;
  },
};
