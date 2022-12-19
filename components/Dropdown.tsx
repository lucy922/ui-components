import { ReactNode, useState } from "react";
import { ChevronDown } from "heroicons-react";
import { Button } from "./Button";
import classes from "./design/Dropdown.classes";

export interface IDropdownClass {
  base: string;
}

export interface IDropdownProps {
  children?: ReactNode;
  options: string[];
}

export const Dropdown = (props: IDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleclick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
      <div className={classes.base}>
        <Button
          type="button"
          textColor="dark"
          variant="transparent"
          onClick={handleclick}
        >
          <div className={classes.base}>
            <span>Dropdown</span>
            <ChevronDown />
          </div>
        </Button>
      </div>
      {showOptions && (
        <ul>
          {props.options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};
