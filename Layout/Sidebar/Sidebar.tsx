import React from "react";
import styles from "./Header.module.css";
import { ISidebarProps } from "./Sidebar.types";

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
