import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { firstLevelMenu } from '../../helpers/helpers';
import {
  IFirstLavelMenuItem,
  IPageItem,
} from '../../interfaces/menu.interfaces';
import { motion, Variants } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants: Variants = {
    hidden: {
      marginBottom: 0,
    },
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const variantsChildren: Variants = {
    visible: {
      height: 'auto',
      opacity: 1,
    },
    hidden: {
      height: 0,
      opacity: 0,
    },
  };

  const openSecondLevel = (secondCategory: string): void => {
    setMenu &&
      setMenu(
        menu.map(m => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLavelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={(): void => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string): JSX.Element => {
    return (
      <>
        {pages.map(p => (
          <motion.div variants={variantsChildren} key={p._id}>
            <Link
              href={`/${route}/${p.alias}`}
              className={classNames(styles.thirdLevel, {
                [styles.thirdLevelActive]:
                  `/${route}/${p.alias}` == router.asPath,
              })}
            >
              {p.category}
            </Link>
          </motion.div>
        ))}
      </>
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
