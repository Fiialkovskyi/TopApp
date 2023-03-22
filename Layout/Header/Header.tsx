import React, { useEffect, useState } from 'react';
import { IHeaderProps } from './Header.types';
import Logo from '../logo.svg';
import styles from './Header.module.css';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import classNames from 'classnames';
import Sidebar from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Logo className={styles.logo} />
      <ButtonIcon
        appearance="primary"
        icon="menu"
        onClick={(): void => setShowMenu(true)}
      />
      <motion.div
        className={styles.menu}
        variants={variants}
        initial={'closed'}
        animate={showMenu ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.closeIcon}
          appearance="primary"
          icon="close"
          onClick={(): void => setShowMenu(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;
