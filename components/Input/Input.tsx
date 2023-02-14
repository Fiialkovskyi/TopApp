import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className={classNames(className, styles.inputWrapper)}>
        <input
          ref={ref}
          className={classNames(styles.input, {
            [styles.invalid]: error?.message,
          })}
          {...props}
        />
        {error?.message && (
          <span className={styles.errorMessage}>{error.message}</span>
        )}
      </div>
    );
  },
);
