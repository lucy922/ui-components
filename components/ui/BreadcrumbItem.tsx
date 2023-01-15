import Link from "next/link";
import { ReactNode } from "react";

export interface BreadcrumbItemProps {
  children: ReactNode;
  href: string;
}

export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  return (
    <li>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};
