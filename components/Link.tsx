import classes from "./design/Link.classes";
import classNames from "classnames";

export interface IlinkClass {
  base: string;
  color: {
    red: string;
    black: string;
    blue: string;
    gray: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface IlinkProps {
  children: React.ReactNode;
  href: string;
  color?: keyof IlinkClass["color"];
  fontSize?: keyof IlinkClass["fontSize"];
}

export const Link = (props: IlinkProps) => {
  return (
    <a
      href={props.href}
      className={classNames(
        classes.base,
        classes.color[props.color ?? "blue"],
        classes.fontSize[props.fontSize ?? "sm"]
      )}
    >
      {props.children}
    </a>
  );
};
