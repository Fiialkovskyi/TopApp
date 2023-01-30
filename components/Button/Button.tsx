import classNames from 'classnames';
import { IButtonProps } from './Button.types';
import ArrowIcon from './Arrow.svg';
import styles from './Button.module.css';

const Button = ({
  appearance,
  children,
  className,
  arrow = 'none',
  ...args
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...args}
    >
      {children}
      {arrow !== 'none' && (
        <ArrowIcon
          className={classNames(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        />
      )}
    </button>
  );
};

export default Button;
