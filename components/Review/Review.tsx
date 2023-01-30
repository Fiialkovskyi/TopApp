import classNames from 'classnames';
import { IReviewProps } from './Review.types';
import UserIcon from './user.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './Review.module.css';
import Rating from '../Rating/Rating';

export const Review = ({
  review,
  className,
  ...props
}: IReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={classNames(styles.review, className)} {...props}>
      <UserIcon className={styles.userIcon} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
