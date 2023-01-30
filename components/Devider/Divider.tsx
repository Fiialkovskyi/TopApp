import { IDividerProps } from './Divider.types';
import styles from './Divider.module.css';
import cn from 'classnames';

export const Divider = ({
  className,
  ...props
}: IDividerProps): JSX.Element => {
  return <hr className={cn(className, styles.divider)} {...props} />;
};
