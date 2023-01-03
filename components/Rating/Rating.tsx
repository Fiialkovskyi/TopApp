import classNames from "classnames";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { IRatingProps } from "./Rating.types";
import StarIcon from "./Star.svg";
import styles from "./Rating.module.css";

const Rating = ({
  isEditable = false,
  rating,
  onRatingChange,
  ...props
}: IRatingProps): JSX.Element => {
  const [starsArray, setStarsArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number): void => {
    const stars = starsArray.map((item, index) => {
      return (
        <span
          className={classNames(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={(): void => changeDispay(index + 1)}
          onMouseLeave={(): void => changeDispay(rating)}
          onClick={(): void => onStarClick(index + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(event: KeyboardEvent): void =>
            onSpaceKeyDown(index + 1, event)
          }
        >
          <StarIcon />
        </span>
      );
    });

    setStarsArray(stars);
  };

  const changeDispay = (i: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onStarClick = (index: number): void => {
    if (!isEditable || !onRatingChange) {
      return;
    }

    onRatingChange(index);
  };

  const onSpaceKeyDown = (index: number, event: KeyboardEvent): void => {
    if (event.code !== "Space" || !onRatingChange || !isEditable) {
      return;
    }

    onRatingChange(index);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {starsArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
