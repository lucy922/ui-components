import classes from "../design/Avatar.classes";
import classNames from "classnames";

export interface AvatarClass {
  base: string;
  size: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface AvatarProps {
  size: keyof AvatarClass["size"];
  src: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div>
      <img
        className={classNames(classes.base, classes.size[props.size ?? "sm"])}
        src={props.src}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
