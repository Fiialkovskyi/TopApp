import JSXStyle from 'styled-jsx/style';
import { IVacanciesAndSalariesProps } from './VacanciesAndSalaries.types';
import styles from './VacanciesAndSalaries.module.css';
import Title from '../Title/Title';
import Tag from '../Tag/Tag';
import { Card } from '../Card/Card';
import StarIcon from './star.svg';
import { convertPriceInRub } from '../../helpers/helpers';
export const VacanciesAndSalaries = ({
  category,
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: IVacanciesAndSalariesProps): JSX.Element => {
  return (
    <div className={styles.vacanciesAndSalaries}>
      <div className={styles.header}>
        <Title tag="h2" className={styles.title}>
          Вакансии - {category}
        </Title>
        <Tag type="danger" size="m">
          hh.ru
        </Tag>
      </div>
      <div className={styles.cardsWrapper}>
        <Card className={styles.vacansies}>
          <div>Всего вакансий</div>
          <div className={styles.totalVacansies}>{count}</div>
        </Card>
        <Card className={styles.salaries}>
          <div className={styles.salariesItem}>
            <div>Начальный</div>
            <div className={styles.salariesPrice}>
              {convertPriceInRub(juniorSalary)}
            </div>
            <div className={styles.starsWrapper}>
              <StarIcon className={styles.filled} />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div className={styles.salariesItem}>
            <div>Средний</div>
            <div className={styles.salariesPrice}>
              {convertPriceInRub(middleSalary)}
            </div>
            <div className={styles.starsWrapper}>
              <StarIcon className={styles.filled} />
              <StarIcon className={styles.filled} />
              <StarIcon />
            </div>
          </div>
          <div className={styles.salariesItem}>
            <div>Профессионал</div>
            <div className={styles.salariesPrice}>
              {convertPriceInRub(seniorSalary)}
            </div>
            <div className={styles.starsWrapper}>
              <StarIcon className={styles.filled} />
              <StarIcon className={styles.filled} />
              <StarIcon className={styles.filled} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
