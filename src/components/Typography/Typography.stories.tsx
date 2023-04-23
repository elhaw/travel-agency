import type { Meta, StoryObj } from "@storybook/react";

import Typography from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    children: "Hello",
    htmlTag: "h1",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "2xl",
  },
};
