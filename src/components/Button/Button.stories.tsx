import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import CustomIcon from "../CustomIcon";
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A button component is a user interface element that allows users to interact with an application or website. It is typically used to trigger an action or perform a task, such as submitting a form, navigating to a different page, or performing an operation on data.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      defaultValue: "md",
      description:
        "defining the possible size options for buttons. The size variable is expected to be small or medium or large ",
      options: {
        sm: "sm",
        md: "md",
        lg: "lg",
      },
    },
    renderIcon: {
      description:
        "The renderIcon functionality of a button component uses a technique called render props to allow the passing of an icon component to the button.",
    },
    variant: {
      control: {
        type: "select",
      },
      defaultValue: "filled",
      options: {
        filled: "filled",
        outlined: "outlined",
        gohst: "gohst",
      },
    },
    iconPosition: {
      control: {
        type: "select",
      },
      defaultValue: "left",
      options: {
        left: "left",
        right: "right",
        none: "none",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    disabled: false,
    size: "md",
    iconPosition: "left",
    variant: "filled",
    type: "button",
    children: "button",
    iconOnly: false,
    renderIcon: () => {
      return <CustomIcon iconSize="sm" iconName="add" />;
    },
  },
};
