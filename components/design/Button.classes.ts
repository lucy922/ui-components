import { IButtonClass } from "../ui/Button";

export default <IButtonClass>{
  base: "p-2 rounded-lg text-center my-4",
  variant: {
    primary: "bg-blue-700",
    secondary: "bg-blue-100",
    success: "bg-green-700",
    warning: "bg-yellow-500",
    danger: "bg-red-700",
    transparent: "border-none outline-none"
  },
  textColor: {
    dark: "text-dark font-semibold",
    white: "text-white font-semibold"
  },
  size: {
    sm: "w-32",
    md: "w-40",
    lg: "w-64",
    xl: "w-full"
  }
}