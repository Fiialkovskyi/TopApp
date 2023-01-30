import { ITitleProps } from './Title.types';
import styles from './Title.module.css';
import classNames from 'classnames';

const Title = ({
  tag,
  children,
  className,
  ...props
}: ITitleProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames(styles.h1, className)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classNames(styles.h2, className)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classNames(styles.h3, className)} {...props}>
          {children}
        </h3>
      );
  }
};

export default Title;
