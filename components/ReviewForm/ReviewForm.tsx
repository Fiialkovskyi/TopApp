import classNames from 'classnames';
import {
  IReviewFormProps,
  IReviewForm,
  IReviewSentResponse,
} from './ReviewForm.types';
import styles from './ReviewForm.module.css';
import { Input } from '../Input/Input';
import Rating from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { API } from '../../helpers/api';

export const ReviewForm = ({
  productId,
  className,
}: IReviewFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = useCallback(
    async (formData: IReviewForm) => {
      setIsSuccess(false);
      setIsError(false);
      try {
        const response = await axios.post<IReviewSentResponse>(
          API.review.createDemo,
          {
            ...formData,
            productId,
          },
        );

        if (response.data.message) {
          setIsSuccess(true);
          reset();
        }
      } catch {
        setIsError(true);
      }
    },
    [productId, reset],
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(styles.reviewForm, className)}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Введите имя' },
          })}
          placeholder="Имя"
          className={styles.nameInput}
          error={errors.name}
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Введите заголовок' },
          })}
          placeholder="Заголовок отзыва"
          className={styles.titleInput}
          error={errors.title}
        />
        <div className={styles.ratingWrapper}>
          <span>Оценка:&nbsp;</span>
          <Controller
            name="rating"
            control={control}
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }): JSX.Element => (
              <Rating
                rating={field.value}
                isEditable={true}
                onRatingChange={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Введите текст отзыва' },
          })}
          placeholder="Текст отзыва"
          className={styles.textarea}
          error={errors.description}
        />
        <div className={styles.footer}>
          <Button appearance="primary">Отправить</Button>
          <div className={styles.additionalInfo}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </div>
        </div>
      </div>
      {isSuccess && (
        <div className={classNames(styles.success, styles.panel)} role="alert">
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <button
            onClick={(): void => setIsSuccess(false)}
            className={styles.close}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon />
          </button>
        </div>
      )}

      {isError && (
        <div className={classNames(styles.error, styles.panel)} role="alert">
          Что-то пошло не так, попробуйте обновить страницу
          <button
            onClick={(): void => setIsError(false)}
            className={styles.close}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  );
};
