import classNames from "classnames";
import { IButtonProps } from "./Button.types";
import styles from "./Button.module.css";

const Button = ({
  appearence,
  children,
  className,
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
    </button>
  );
};

export default Button;
