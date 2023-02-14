import { ITextareaProps } from './Textarea.types';
import styles from './Textarea.module.css';
import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(
  (
    { className, error, ...props }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    return (
      <div className={classNames(styles.textareaWrapper, className)}>
        <textarea
          ref={ref}
          className={classNames(styles.textarea, {
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
