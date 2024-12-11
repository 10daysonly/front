import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Icon from ".";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackIcon: Story = {
  args: { icon: "back" },
};

export const CameraIcon: Story = {
  args: { icon: "camera" },
};

export const SearchIcon: Story = {
  args: { icon: "search" },
};

export const EditIcon: Story = {
  args: { icon: "edit" },
};

export const CalendarIcon: Story = {
  args: { icon: "calendar" },
};
export const CalendarLargeIcon: Story = {
  args: { icon: "calendarLarge" },
};

export const LocationIcon: Story = {
  args: { icon: "location" },
};
export const LocationLargeIcon: Story = {
  args: { icon: "locationLarge" },
};

export const SparkIcon: Story = {
  args: { icon: "spark" },
};
export const SparkLargeIcon: Story = {
  args: { icon: "sparkLarge" },
};

export const TimeIcon: Story = {
  args: { icon: "timeLarge" },
};

export const ShareIcon: Story = {
  args: { icon: "share" },
};
