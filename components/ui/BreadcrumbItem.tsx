import Link from "next/link";
import { ReactNode } from "react";

export interface BreadcrumbItemProps {
  children: ReactNode;
  href: string;
}

export const BreadcrumbItem = ({ children, href }: BreadcrumbItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};
