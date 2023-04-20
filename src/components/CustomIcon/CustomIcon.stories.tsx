import type { Meta, StoryObj } from "@storybook/react";

import CustomIcon from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/CustomIcon",
  component: CustomIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "After you generate the font and CSS files for your icons using the iconmono website, you download these files and save them in your src/lib/icons directory in your project. This is where you keep all of your icon-related files for your project. just add the generated class such .icon-add",
      },
    },
  },
  argTypes: {
    iconSize: {
      description: "The size of the icon",
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: {
        sm: "sm",
        md: "md",
        lg: "lg",
      },
    },
    iconName: {
      description:
        "The iconName prop is used to specify the name of the icon to be displayed. The available icon names can be found in the CSS file generated in src/lib/icons/styles",
    },
  },
} satisfies Meta<typeof CustomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    iconName: "add",
    iconSize: "md",
  },
};
