import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Modal from "./";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "title",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugiat exercitationem aut
        asperiores perspiciatis velit, porro voluptates ipsa facilis ea enim cum optio vel aliquam
        distinctio libero, dolor adipisci sunt.
      </p>
    ),
    onClose: () => {},
  },
  decorators: [
    (Story, context) => {
      const [open, setOpen] = React.useState(false);
      const handleClose = () => {
        setOpen(false);
      };
      return (
        <div>
          <button
            onClick={() => {
              return setOpen(true);
            }}
          >
            open
          </button>
          <div style={{ height: "400px" }}></div>
          <Story args={{ ...context.args, open, onClose: handleClose }} />
        </div>
      );
    },
  ],
};

export const OpenedCase: Story = {
  args: {
    title: "title",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugiat exercitationem aut
        asperiores perspiciatis velit, porro voluptates ipsa facilis ea enim cum optio vel aliquam
        distinctio libero, dolor adipisci sunt.
      </p>
    ),
    onClose: () => {},
  },
  decorators: [
    (Story, context) => {
      const [open, setOpen] = React.useState(true);
      const handleClose = () => {
        setOpen(false);
      };
      return (
        <div>
          <button
            onClick={() => {
              return setOpen(true);
            }}
          >
            open
          </button>
          <div style={{ height: "400px" }}></div>
          <Story args={{ ...context.args, open, onClose: handleClose }} />
        </div>
      );
    },
  ],
};

export const NoBtnClose: Story = {
  args: {
    title: "title",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugiat exercitationem aut
        asperiores perspiciatis velit, porro voluptates ipsa facilis ea enim cum optio vel aliquam
        distinctio libero, dolor adipisci sunt.
      </p>
    ),
  },
  decorators: [
    (Story, context) => {
      const [open, setOpen] = React.useState(true);
      const handleClose = () => {
        setOpen(false);
      };
      return (
        <div>
          <button
            onClick={() => {
              return setOpen(true);
            }}
          >
            open
          </button>
          <div style={{ height: "400px" }}></div>
          <Story args={{ ...context.args, open }} />
        </div>
      );
    },
  ],
};
