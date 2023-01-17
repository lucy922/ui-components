import { useState } from "react";
import classes from "../design/Toggle.classes";

export interface ToggleClass {
  base1: string;
  base2: string;
  label: string;
}

export const Toggle = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className={classes.base2}>
      <div className="flex">
        <label className={classes.label}>
          <input className="sr-only peer" type="checkbox" checked={enabled} />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className={classes.base1}
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">ON</span>
        </label>
      </div>
    </div>
  );
};
