import classes from "../design/Label.classes";

export interface IlabelClass {
  base: string;
}

export interface IlabelProps {
  children: React.ReactNode;
  for?: string;
}

export const Label = (props: IlabelProps) => {
  return (
    <>
      <label className={classes.base} htmlFor={props.for}>
        {props.children}
      </label>
    </>
  );
};
