import styles from "./Spinner.module.css";
import cn from "classnames";

type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
  return <div className={cn(styles.loader, className)}>Loading...</div>;
};

export default Spinner;
