export enum SortType {
  Rating,
  Price,
}

export interface ISortProps {
  sortType: SortType;
  setSortType: (sort: SortType) => void;
}
