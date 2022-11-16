import { IButtonClasses } from "../components/Button";

export default <IButtonClasses> {
  base: "p-2 rounded text-center text-white",
  variant: {
    primary: "bg-blue-800" ,
    secondary: 'bg-red-800',
    outlined: "border-solid border-2 border-sky-500"
  },
  size: {
    sm: "w-24",
    md: " w-32",
    lg: "w-64"
  }
}