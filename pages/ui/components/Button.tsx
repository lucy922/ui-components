import { ReactNode } from "react";
import classes from "../design/Button.classes";
import classNames from "classnames";

export interface IButtonClasses {
  base: string;
  variant: {
    outlined: string;
    primary: string;
    secondary: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface IButtonProps {
  children?: ReactNode;
  type?: "reset" | "submit" | "button";
  disabled?: boolean;
  variant?: keyof IButtonClasses["variant"];
  size?: keyof IButtonClasses["size"];
}

export default function Button(props: IButtonProps) {
  return (
    <button
      className={classNames(
        classes.base,
        classes.variant[props.variant ?? "primary"],
        classes.size[props.size ?? "sm"]
      )}
    >
      {props.children}
    </button>
  );
}
