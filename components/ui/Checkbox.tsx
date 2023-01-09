import { Label } from "./Label";
import classNames from "classnames";
import classes from "../design/Checkbox.classes";

export interface ICheckClass {
  base: string;
  reversed: string;
  checkboxInput: string;
}
export interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name?: string;
  labeltext?: string;
  reversed?: string;
  // onChange(value: boolean): void;
}

export const Checkbox = ({
  name,
  labeltext,
}: // onChange,
// ...shared
ICheckboxProps) => {
  return (
    <div className="flex items-center h-5 py-5 mb-5">
      <input
        type="checkbox"
        // onChange={(e) => onChange(e.target.checked)}
        // {...shared}
        className={classNames(classes.base)}
      />
      <Label for={name}>{labeltext}</Label>
    </div>
  );
};
