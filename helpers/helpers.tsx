import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { IFirstLavelMenuItem } from '../interfaces/menu.interfaces';
import { TopLevelCategory } from '../interfaces/page.interfaces';

export const firstLevelMenu: IFirstLavelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    id: TopLevelCategory.Courses,
    icon: <CoursesIcon />,
  },
  {
    route: 'books',
    name: 'Книги',
    id: TopLevelCategory.Books,
    icon: <ServicesIcon />,
  },
  {
    route: 'services',
    name: 'Сервисы',
    id: TopLevelCategory.Services,
    icon: <BooksIcon />,
  },
  {
    route: 'products',
    name: 'Товары',
    id: TopLevelCategory.Products,
    icon: <ProductsIcon />,
  },
];

export const convertPriceInRub = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

export const declOfNum = (
  number: number,
  titles: [string, string, string],
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
