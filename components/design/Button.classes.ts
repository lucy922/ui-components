import { IButtonClass } from "../Button";

export default <IButtonClass>{
  base: "p-2 rounded text-center text-white",
  variant: {
    outlined: "border-solid border-2 border-sky-500",
    primary: "bg-blue-700",
    secondary: "bg-slate-700",
    success: "bg-green-700",
    warning: "bg-yellow-500",
    danger: "bg-red-700"
  },
  size: {
    sm: "w-32",
    md: "w-40",
    lg: "w-64",
    xl: "w-full"
  }
}