import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, ReactNode } from "react";

export interface BreadcrumbClass {
  disabled: string;
}

export interface BreadcrumbProps {
  children: ReactNode[];
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const childrenWithSeperator = props.children.map((child, index) => {
    if (index !== props.children.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>
            <FontAwesomeIcon className="w-3 h-3" icon={faAngleRight} />
          </span>
        </Fragment>
      );
    }
    return child;
  });
  return (
    <nav className="mx-8 md:mx-16 lg:mx-32 mt-8">
      <ol className="flex items-center space-x-4">{childrenWithSeperator}</ol>
    </nav>
  );
};
