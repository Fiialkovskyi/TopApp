import React from "react";
import classNames from "classnames";
import { IParagraphProps } from "./Paragraph.types";
import styles from "./Paragraph.module.css";

const Paragraph = ({
  size = "m",
  children,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.paragraph, {
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
        [styles.large]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
