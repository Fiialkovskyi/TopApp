import React from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from "./Header.types";

const Header = ({ ...props }: IHeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
