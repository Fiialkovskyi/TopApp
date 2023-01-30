import classNames from 'classnames';
import { ICardProps } from './Card.types';
import styles from './Card.module.css';

export const Card = ({
  color = 'white',
  className,
  children,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
