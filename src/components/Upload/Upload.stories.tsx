import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Upload from ".";

import Button from "@/components/Button";

const meta = {
  title: "Components/Upload",
  component: Upload,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <Button color="primary" size="large" block={true}>
        Upload
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      const [value, setValue] = React.useState(null);
      return <Story value={value} setValue={setValue} />;
    },
  ],
};
