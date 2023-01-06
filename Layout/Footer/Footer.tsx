import React from "react";
import styles from "./Footer.module.css";
import { IFooterProps } from "./Footer.types";
import classNames from "classnames";

const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - 2021 Все права защищены</div>
      <div className={styles.linkWrapper}>
        <a href='#' target='_blank'>
          Пользовательское соглашение
        </a>
      </div>
      <div className={styles.linkWrapper}>
        <a className={styles.link} href='#' target='_blank'>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
