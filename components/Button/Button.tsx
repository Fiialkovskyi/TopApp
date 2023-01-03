import classNames from "classnames";
import { IButtonProps } from "./Button.types";
import ArrowIcon from "./Arrow.svg";
import styles from "./Button.module.css";

const Button = ({
  appearence,
  children,
  className,
  arrow = "none",
  ...args
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.primary]: appearence === "primary",
          [styles.ghost]: appearence === "ghost",
        },
        className
      )}
      {...args}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          className={classNames(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
};

export default Button;
