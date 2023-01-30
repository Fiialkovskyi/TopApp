import React from 'react';
import { Menu } from '../../components/Menu/Menu';
import styles from './Sidebar.module.css';
import { ISidebarProps } from './Sidebar.types';
import Logo from '../logo.svg';
import classNames from 'classnames';
import { Search } from '../../components/Search/Search';

const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
