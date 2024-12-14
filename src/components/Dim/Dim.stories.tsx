import type { Meta, StoryObj } from "@storybook/react";

import Dim from "./";

const meta = {
  title: "Components/Dim",
  component: Dim,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dim>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    open: false,
  },
  decorators: [
    (Story) => {
      return (
        <Dim.Parent>
          <div
            style={{
              color: "#ffffff",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tenetur
            laborum hic sed delectus aliquam corporis vel vero culpa aliquid, aperiam quos incidunt
            nesciunt facere dolore eligendi nam molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis explicabo non nemo, sit quaerat vitae iste cumque est
            accusantium? Voluptas magnam nostrum inventore molestias quasi eaque, delectus modi amet
            natus?
          </div>

          <Story />
        </Dim.Parent>
      );
    },
  ],
};
