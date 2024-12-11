import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import List from "./";

import Image from "@/components/Image";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyData = [
  {
    url: "https://img.freepik.com/premium-vector/people-profile-icon_24877-40760.jpg?semt=ais_hybrid",
    name: "user a",
    info: "user a is user a",
  },
  {
    url: "https://img.freepik.com/premium-vector/people-profile-icon_24877-40760.jpg?semt=ais_hybrid",
    name: "user b",
    info: "user b is user b",
  },
];

export const ExampleMeta: Story = {
  args: {
    dataSource: dummyData,
    renderItem: (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<img src={item.url} alt="" style={{ width: "50px", height: "50px" }} />}
          title={item.name}
          description={item.info}
        />
      </List.Item>
    ),
  },
};

export const Action: Story = {
  args: {
    dataSource: dummyData,
    renderItem: (item) => (
      <List.Item
        actions={
          <>
            <Button color={`primary`} size="small">
              참석
            </Button>
            <Button color={`info`} size="small">
              불참
            </Button>
          </>
        }
      >
        <List.Item.Meta avatar={<Avatar size="large" />} title={item.name} />
      </List.Item>
    ),
  },
};

export const Reverse: Story = {
  args: {
    reverse: true,
    dataSource: dummyData,
    renderItem: (item) => (
      <List.Item>
        <List.Item.Meta avatar={<Avatar />} title={item.name} description={item.info} />
      </List.Item>
    ),
  },
};

import dummyImage2 from "@/components/Image/imgs/dummyImage2.png";

const dummyImageData = [{ ...dummyImage2 }, { ...dummyImage2 }];

export const TestGrid: Story = {
  args: {
    dataSource: dummyImageData,
    renderItem: (item) => (
      <List.Item>
        <Image src={item.src} width={item.width} height={item.height} />
      </List.Item>
    ),
    grid: true,
  },
};
