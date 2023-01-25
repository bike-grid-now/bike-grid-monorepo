import React from "react";
import clsx from "clsx";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container(props: ContainerProps): JSX.Element {
  return (
    <div className={clsx("max-w-6xl mx-auto px-4", props.className)}>
      {props.children}
    </div>
  );
}
