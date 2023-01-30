import React from 'react';
import Title from '../Title/Title';
import { IAdavantagesProps } from './Advantages.types';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({
  advantages,
}: IAdavantagesProps): JSX.Element | null => {
  const advantagesWithTitle = advantages.filter(item => item.title.length);

  if (advantagesWithTitle.length === 0) {
    return null;
  }

  return (
    <div className={styles.advantages}>
      <Title tag="h2">Преимущества</Title>
      <ul className={styles.advantagesList}>
        {advantagesWithTitle.map(item => {
          return (
            <li key={item._id} className={styles.advantageItem}>
              <CheckIcon></CheckIcon>
              <Title className={styles.advantageTitle} tag="h3">
                {item.title}
              </Title>
              {item.description && (
                <>
                  <hr className={styles.vline} />
                  <p>{item.description}</p>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
