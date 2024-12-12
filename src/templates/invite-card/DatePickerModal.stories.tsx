import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DatePickerModal from "./DatePickerModal";

const meta = {
  title: "Templates/DatePickerModal",
  component: DatePickerModal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePickerModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
    open: true,
    onClose: () => {},
  },
  decorators: (Story) => {
    return (
      <>
        <div style={{ height: "700px" }}></div>
        <Story />
      </>
    );
  },
};
