import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  return (
    <ul className={styles.firstLevelMenu}>
      {firstLevelMenu.map(firstLevelItem => {
        return (
          <li
            key={firstLevelItem.route}
            className={classNames(styles.firstLevelMenuItem)}
          >
            <Link
              href={`/${firstLevelItem.route}`}
              className={classNames(styles.firstLevelLink, {
                [styles.firstLevelLinkActive]:
                  firstLevelItem.id === firstCategory,
              })}
            >
              {firstLevelItem.icon}
              <span>{firstLevelItem.name}</span>
            </Link>

            {firstLevelItem.id === firstCategory && (
              <ul className={classNames(styles.secondLevelMenu)}>
                {menu.map(secondLevelItem => {
                  const isOpened = secondLevelItem.pages
                    .map(p => p.alias)
                    .includes(router.asPath.split('/')[2]);

                  return (
                    <li
                      key={secondLevelItem._id.secondCategory}
                      className={classNames(styles.secondLevelMenuItem, {
                        [styles.secondLevelMenuItemOpended]: isOpened,
                      })}
                    >
                      <span>{secondLevelItem._id.secondCategory}</span>
                      <ul className={classNames(styles.thirdLevelMenu)}>
                        {secondLevelItem.pages.map(page => {
                          return (
                            <li
                              key={page._id}
                              className={classNames(styles.thirdLevelMenuItem)}
                            >
                              <Link
                                href={`/${firstLevelItem.route}/${page.alias}`}
                                className={classNames(styles.thirdLevelLink, {
                                  [styles.thirdLevelLinkActive]:
                                    router.asPath.includes(page.alias),
                                })}
                              >
                                {page.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
