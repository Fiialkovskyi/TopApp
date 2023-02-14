import classNames from 'classnames';
import { convertPriceInRub, declOfNum } from '../../helpers/helpers';
import Button from '../Button/Button';
import { Card } from '../Card/Card';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import styles from './Product.module.css';
import { IProductProps } from './Product.types';
import Image from 'next/image';
import { Divider } from '../Devider/Divider';
import { useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product = ({
  product,
  className,
  ...props
}: IProductProps): JSX.Element => {
  const [isReviewsOpened, setIsReviewsOpened] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const onReviewsCountClick = (): void => {
    setIsReviewsOpened(true);
    reviewsRef.current?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  return (
    <div className={classNames(className)} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {convertPriceInRub(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              {convertPriceInRub(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {convertPriceInRub(product.credit)}/
          <span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(c => (
            <Tag key={c} className={styles.category} color="ghost">
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div className={styles.rateTitle}>
          <a href="#reviews" onClick={onReviewsCountClick}>
            {product.reviewCount}{' '}
            {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={classNames(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewsOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={(): void => setIsReviewsOpened(!isReviewsOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        className={classNames(styles.reviews, {
          [styles.reviewsOpened]: isReviewsOpened,
          [styles.reviewsClosed]: !isReviewsOpened,
        })}
        ref={reviewsRef}
      >
        {product.reviews.map(item => (
          <div key={item._id}>
            <Review review={item} key={item._id} />
            <Divider />
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </div>
  );
};
