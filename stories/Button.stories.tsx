import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "../components/ui/Button";
import classes from "../components/design/Button.classes";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: Object.keys(classes.variant),
      control: { type: "radio" },
      defaultValue: "outlined",
    },
    size: {
      options: Object.keys(classes.size),
      control: { type: "radio" },
      defaultValue: "sm",
    },
    disabled: {
      defaultValue: "false",
    },
    children: {
      type: "string",
      defaultValue: "Button",
    },
  },
};

const Template: Story<IButtonProps> = (args) => <Button {...args}></Button>;

export default meta;
