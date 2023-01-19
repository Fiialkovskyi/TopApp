import React from 'react';
import { Menu } from '../../components/Menu/Menu';
import styles from './Sidebar.module.css';
import { ISidebarProps } from './Sidebar.types';
import Logo from '../logo.svg';
import classNames from 'classnames';

const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Search</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
