import { IinputClass } from "../Input";

export default <IinputClass>{
base: "text-black w-96 rounded outline-none p-5",
size: {
  sm: "py-1.5",
  md: "py-2",
  lg: "py-2.5"
},
variant: {
  primary: "border-solid border-2 border-slate-500",
  outlined: "border-solid border-2 border-sky-500",
  filled: "bg-sky-100",
  danger: "border-2 border-rose-500"
}
}