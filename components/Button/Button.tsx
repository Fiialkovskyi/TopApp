import classNames from 'classnames';
import { IButtonProps } from './Button.types';
import ArrowIcon from './Arrow.svg';
import styles from './Button.module.css';
import { motion } from 'framer-motion';

const Button = ({
  appearance,
  children,
  className,
  arrow = 'none',
  ...args
}: IButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
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
    </motion.button>
  );
};

export default Button;
