import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
