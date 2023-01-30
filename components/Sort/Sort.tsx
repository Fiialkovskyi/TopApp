import classNames from 'classnames';
import { ISortProps, SortType } from './Sort.types';
import SortIcon from './sort.svg';
import styles from './Sort.module.css';

export const Sort = ({ sortType, setSortType }: ISortProps): JSX.Element => {
  return (
    <div className={styles.sort}>
      <div
        className={classNames(styles.sortItem, {
          [styles.sortItemActive]: sortType === SortType.Rating,
        })}
        onClick={(): void => setSortType(SortType.Rating)}
      >
        <SortIcon className={styles.sortIcon} />
        <span>По рейтингу</span>
      </div>
      <div
        className={classNames(styles.sortItem, {
          [styles.sortItemActive]: sortType === SortType.Price,
        })}
        onClick={(): void => setSortType(SortType.Price)}
      >
        <SortIcon className={styles.sortIcon} />
        <span>По цене</span>
      </div>
    </div>
  );
};
