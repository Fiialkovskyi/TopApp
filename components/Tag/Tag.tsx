import React from "react";
import classNames from "classnames";
import { ITagProps } from "./Tag.types";
import styles from "./Tag.module.css";

const Tag = ({
  size = "m",
  href,
  children,
  className,
  type = "primary",
}: ITagProps): JSX.Element => {
  return (
    <div
      className={classNames(className, styles.tag, {
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
        [styles.ghost]: type === "ghost",
        [styles.danger]: type === "danger",
        [styles.secondary]: type === "secondary",
        [styles.primary]: type === "primary",
        [styles.success]: type === "success",
      })}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

export default Tag;
