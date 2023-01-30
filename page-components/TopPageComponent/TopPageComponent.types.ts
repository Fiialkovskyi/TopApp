import {
  ITopPageModel,
  TopLevelCategory,
} from '../../interfaces/page.interfaces';
import { IProductModel } from '../../interfaces/product.interfaces';

export interface ITopPageComponentProps {
  page: ITopPageModel;
  products: IProductModel[];
  firstCategory: TopLevelCategory;
}
