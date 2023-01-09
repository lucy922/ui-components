import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import classes from "../design/Button.classes";

export interface IButtonClass {
  base: string;
  variant: {
    outlined: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    transparent: string;
  };
  textColor: {
    dark: string;
    white: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  variant?: keyof IButtonClass["variant"];
  size?: keyof IButtonClass["size"];
  textColor?: keyof IButtonClass["textColor"];
  onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={classNames(
        classes.base,
        classes.textColor[props.textColor ?? "white"],
        classes.variant[props.variant ?? "primary"],
        classes.size[props.size ?? "sm"]
      )}
    >
      {props.children}
    </button>
  );
};
