import { ITextareaProps } from './Textarea.types';
import styles from './Textarea.module.css';
import classNames from 'classnames';

export const Textarea = ({
  className,
  ...props
}: ITextareaProps): JSX.Element => {
  return (
    <textarea className={classNames(styles.textarea, className)} {...props} />
  );
};
