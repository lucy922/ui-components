import classNames from "classnames";
import classes from "./design/Card.classes";

export interface ICardClass {
  base: string;
  bgColor: {
    white: string;
    gray: string;
  };
  size: {
    full: string;
    fit: string;
    screen: string;
    "1/12": string;
    "2/12": string;
    "3/12": string;
    "4/12": string;
    "5/12": string;
    "6/12": string;
    "7/12": string;
    "8/12": string;
    "9/12": string;
    "10/12": string;
    "11/12": string;
  };
  textColor: string;
}

export interface ICardProps {
  children: React.ReactNode;
  bgColor?: keyof ICardClass["bgColor"];
  size?: keyof ICardClass["size"];
}

export const Card = (props: ICardProps) => {
  return (
    <>
      <div
        className={classNames(
          classes.base,
          classes.size[props.size ?? "full"],
          classes.bgColor[props.bgColor ?? "white"],
          classes.textColor
        )}
      >
        {props.children}
      </div>
    </>
  );
};
