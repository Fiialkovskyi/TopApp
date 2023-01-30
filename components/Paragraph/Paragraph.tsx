import React from 'react';
import classNames from 'classnames';
import { IParagraphProps } from './Paragraph.types';
import styles from './Paragraph.module.css';

const Paragraph = ({
  size = 'm',
  className,
  children,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.paragraph, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
