import React, { useCallback, useEffect, useReducer } from 'react';
import { ITopPageComponentProps } from './TopPageComponent.types';
import styles from './TopPageComponent.module.css';
import { Tag, Title } from '../../components';
import { VacanciesAndSalaries } from '../../components/VacanciesAndSalaries/VacanciesAndSalaries';
import { TopLevelCategory } from '../../interfaces/page.interfaces';
import { Advantages } from '../../components/Advantages/Advantages';
import { Sort } from '../../components/Sort/Sort';
import { SortType } from '../../components/Sort/Sort.types';
import { sortReducer } from './sort.reducer';
import { Product } from '../../components/Product/Product';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sortType }, dispatch] = useReducer(
    sortReducer,
    { products, sortType: SortType.Rating },
  );

  const setSortType = useCallback((sortType: SortType) => {
    dispatch({ type: sortType });
  }, []);

  useEffect(() => {
    dispatch({ type: 'reset', products: products });
  }, [products]);

  return (
    <>
      <div className={styles.header}>
        <Title tag="h1" className={styles.title}>
          Курсы на тему {page.category}
        </Title>
        <Tag type="secondary" size="m" className={styles.tag}>
          {products.length}
        </Tag>
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      {sortedProducts.map(product => (
        <Product layout key={product._id} product={product} />
      ))}
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <VacanciesAndSalaries category={page.category} {...page.hh} />
      )}
      {page.advantages?.length ? (
        <Advantages advantages={page.advantages} />
      ) : null}
      {page?.seoText && (
        <div
          className={styles.seoText}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Title tag="h2" className={styles.skillsTitle}>
        Получаемые навыки
      </Title>
      {page.tags.map(tag => (
        <Tag key={tag} type="primary" className={styles.tag}>
          {tag}
        </Tag>
      ))}
    </>
  );
};
