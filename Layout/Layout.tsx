import React, { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ILayoutProps } from "./Layout.types";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper} {...props}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
