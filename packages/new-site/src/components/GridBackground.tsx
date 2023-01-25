import styles from "./GridBackground.module.css";
import clsx from "clsx";

export interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GridBackground(props: GridBackgroundProps) {
  return (
    <div className={clsx(styles.grid_background, props.className)}>
      {props.children}
    </div>
  );
}
