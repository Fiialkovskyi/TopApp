import { TopLevelCategory } from './page.interfaces';

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: IPageItem[];
}

export interface IFirstLavelMenuItem {
  route: string;
  name: string;
  id: TopLevelCategory;
  icon: JSX.Element;
}
