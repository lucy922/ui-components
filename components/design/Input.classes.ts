import { IinputClass } from "../Input";

export default <IinputClass>{
base: "text-black rounded outline-none p-5 w-full mt-2 mb-8",
size: {
  sm: "py-1.5",
  md: "py-2",
  lg: "py-2.5"
},
variant: {
  primary: "border-solid border border-gray-200",
  transparent: "border-transparent",
  outlined: "border-solid border border-sky-500",
  filled: "bg-sky-100",
  danger: "border border-rose-500"
}
}