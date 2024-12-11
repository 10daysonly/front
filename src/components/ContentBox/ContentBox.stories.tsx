import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ContentBox from ".";

const meta = {
  title: "Components/ContentBox",
  component: ContentBox,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor laborum exercitationem veritatis eaque accusamus necessitatibus, sequi molestiae similique asperiores. Rerum placeat laborum perferendis soluta, quas vel repudiandae aspernatur alias!`,
  },
};
