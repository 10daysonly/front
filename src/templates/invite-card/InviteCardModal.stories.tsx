import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InviteCardModal from "./InviteCardModal";

const meta = {
  title: "Templates/InviteCardModal",
  component: InviteCardModal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InviteCardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <div style={{ height: "800px" }}></div>
          <Story />
        </>
      );
    },
  ],
};
