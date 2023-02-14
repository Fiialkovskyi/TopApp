import classNames from 'classnames';
import { ICardProps } from './Card.types';
import styles from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(
  (
    { color = 'white', className, children, ...props }: ICardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div
        className={classNames(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
