import { SortType } from '../../components/Sort/Sort.types';
import { IProductModel } from '../../interfaces/product.interfaces';

export type SortActions = { type: SortType.Price } | { type: SortType.Rating };

export interface ISortStore {
  sortType: SortType;
  products: IProductModel[];
}

export const sortReducer = (
  store: ISortStore,
  action: SortActions,
): ISortStore => {
  switch (action.type) {
    case SortType.Price: {
      return {
        sortType: SortType.Price,
        products: store.products.sort((a, b) => a.price - b.price),
      };
    }
    case SortType.Rating: {
      return {
        sortType: SortType.Rating,
        products: store.products.sort(
          (a, b) => a.initialRating - b.initialRating,
        ),
      };
    }
    default:
      return store;
  }
};
