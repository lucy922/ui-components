import classNames from "classnames";
import classes from "./design/Input.classes";
export interface IinputClass {
  base: string;
  size: {
    sm: string;
    md: string;
    lg: string;
  };
  variant: {
    primary: string;
    outlined: string;
    filled: string;
    danger: string;
  };
}

export interface IinputProps {
  type: "checkbox" | "number" | "text" | "password";
  placeholder: string;
  size: keyof IinputClass["size"];
  variant: keyof IinputClass["variant"];
}

export const Input = (props: IinputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={classNames(
        classes.base,
        classes.size[props.size ?? "md"],
        classes.variant[props.variant ?? "primary"]
      )}
    />
  );
};
